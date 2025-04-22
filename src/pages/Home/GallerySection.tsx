import { FC } from 'react';
import { GalleryImage } from '~/uikit';
import { data } from '~/data';
import s from './GallerySection.module.scss';

const gallery_data = data.gallery_data;

export interface IGallerySectionProps {

}

export const GallerySection: FC<IGallerySectionProps> = () => (
  <div className="container">
    <div className="mb-5">
      <h1>Gallery Section</h1>

      <div className={s.masonry}>

        {gallery_data.map((gallery_image, i) => (
          <div className={s.image} key={i}>
            <GalleryImage
              noFrame={true}
              images={[gallery_image]}
              previewImage={gallery_image}
              previewTitle={gallery_image.title}
              previewChip={gallery_image.chipText}
            />
          </div>
        ))}

      </div>
    </div>
  </div>
)
