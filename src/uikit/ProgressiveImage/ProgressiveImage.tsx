import { useState, useEffect, useRef } from 'react';
import s from './ProgressiveImage.module.scss';
import classNames from 'classnames/bind';
import {isNil} from 'lodash';
// import {Loader} from 'UIKit/Icons';
import {ProgressiveImageProps, ProgressiveImageState} from '.';

const sx = classNames.bind(s);

export const ProgressiveImage = (props: ProgressiveImageProps) => {

  const {alt, description} = props;
  const loadingImage = useRef<any>(null);

  const [state, setState] = useState<ProgressiveImageState>({
    currentImage: props.preview,
    loading: true
  });

  let progressiveImageClassNames = sx({
    ProgressiveImageContainer: true,
    Interactive: isNil(props.interactive) ? false : props.interactive,
    Loading: state.loading
  });

  useEffect(() => {

    const image = new Image();

    image.onload = () => setState({
      currentImage: loadingImage.current.src,
      loading: false
    });

    image.src = props.image;
    loadingImage.current = image;

    return () => {
      image.onload = null;
    };

  }, [props.image]);

  const style = (loading: boolean) => {
    return {
      filter: `${loading ? 'blur(40px)' : ''}`,
      transform: `${loading ? 'scale(0.95)' : ''}`
    }
  };

  const { currentImage, loading } = state;

  return (
    <div className={progressiveImageClassNames}>
      <img className={s.progressiveImage} style={style(loading)} src={currentImage} alt={alt}/>
      {description && <div className={s.description}>
        {description}
      </div>}
      {loading && <div className='loaderBlock'><span>Loading...</span></div>}
    </div>
  );

}
