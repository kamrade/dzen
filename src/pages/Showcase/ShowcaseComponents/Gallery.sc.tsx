import { GalleryImage } from '~/uikit';

const images = [{
  src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/61154c214704577.675c7bab91bdd.png',
  alt: ''
},{
  src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/27b8eb211051423.671b9f15a06cd.jpg',
  alt: 'Image 1'
}, {
  src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/066880211051423.671b9f15a4c6d.jpg',
  alt: 'Image 2'
}]

export const GalleryShowcase = () => {
  return (
    <div>
      <h1>Gallery Showcase</h1>
      <GalleryImage
        noFrame={true}
        images={images}
        previewImage={images[1]}
        previewWidth={200}
      />
    </div>
  );
}