import { GalleryImage } from '~/uikit';

export const GalleryShowcase = () => {
  return (
    <div>
      <h1>Gallery Showcase</h1>
      <GalleryImage
        previewTitle={"Preview Title"}
        previewChip={"Preview Chip"}

        images={[{
          src: 'https://ath.live/api/v1/uploads/large_u4568294993_A_bold_and_vibrant_artwork_of_a_glowing_Bitcoin_f_94cd2ab0_5817_4ad1_9ff5_1ba0e82bfe74_2_a9cbb34c3e.jpg',
          alt: 'Image 1'
        }, {
          src: 'https://ath.live/api/v1/uploads/large_tata007683_Bitcoin_depicted_as_a_tree_or_path_At_the_bottom_79b6e449_bd43_4fbd_8508_aeb7790519be_3_54cb25238f.jpg',
          alt: 'Image 2'
        }]}

        previewImage = {{
          src: 'https://ath.live/api/v1/uploads/large_u4568294993_A_bold_and_vibrant_artwork_of_a_glowing_Bitcoin_f_94cd2ab0_5817_4ad1_9ff5_1ba0e82bfe74_2_a9cbb34c3e.jpg',
          alt: 'Image'
        }}

        previewWidth={200}
      />
    </div>
  );
}