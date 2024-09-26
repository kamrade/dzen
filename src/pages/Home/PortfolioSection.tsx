import { galleryB2BCardsData, galleryEWData, gallerySidebarData } from '~/pages/Home/gallery-data.ts';
import { GalleryImage } from '~/uikit';

export const PortfolioSection = () => (
  <div className={"container-fluid"}>

    <div className="row">

      <div className="col-lg-8 col-md-12">

        <GalleryImage
          previewTitle={'Sidebar UI component'}
          previewChip={'UI Component'}
          previewImage={{
            src: '/img/sidebar_showcase.png',
            alt: '',
          }}
          title={'Sidebar UI'}
          images={gallerySidebarData}
        />

      </div>

      <div className="col-lg-8 col-md-12">
        <GalleryImage
          previewTitle={'Extreme Waves'}
          previewChip={'Design System. User Interface.'}
          previewImage={{
            src: '/img/ews_thumbnail.png',
            alt: '',
          }}
          title={'Extreme Waves'}
          images={galleryEWData}
        />
      </div>

      <div className="col-lg-8 col-md-12">
        <GalleryImage
          previewTitle={'B2BCards'}
          previewChip={'User Interface.'}
          previewImage={{
            src: '/img/b2bcards_thumbnail.png',
            alt: '',
          }}
          title={'B2BCards'}
          images={galleryB2BCardsData}
        />
      </div>

      <div className="col-lg-8 col-md-12">
        <GalleryImage
          previewTitle={'Calendar UI component'}
          previewChip={'UI Component'}
          previewImage={{
            src: '/img/calendar_showcase.png',
            alt: '',
          }}
          title={'Calendar UI component'}
        />
      </div>

      <div className="col-lg-8 col-md-12">

        <GalleryImage
          previewTitle={'Turnovers Flow'}
          previewChip={'Feature'}
          previewImage={{
            src: '/img/turnover_flow_chart.png',
            alt: '',
          }}
          title={'Turnovers Flow'}
        />

      </div>

    </div>

    <div style={{ height: '100vh', borderBottom: '1px solid lightgray' }}></div>
    <div style={{ height: '100vh', borderBottom: '1px solid lightgray' }}></div>
    <div style={{ height: '100vh', borderBottom: '1px solid lightgray' }}></div>
    <div style={{ height: '100vh', borderBottom: '1px solid lightgray' }}></div>
    <div style={{ height: '100vh', borderBottom: '1px solid lightgray' }}></div>
    <div style={{ height: '100vh', borderBottom: '1px solid lightgray' }}></div>
    <div style={{ height: '100vh', borderBottom: '1px solid lightgray' }}></div>
    <div style={{ height: '100vh', borderBottom: '1px solid lightgray' }}></div>
  </div>
)
