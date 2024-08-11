import { GalleryGeneric } from '~/pages/Home/GalleryGeneric.tsx';
import { galleryB2BCardsData, galleryEWData, gallerySidebarData } from '~/pages/Home/gallery-data.ts';

export const PortfolioSection = () => (
  <div className={"container-fluid"}>

    <div className="row">

      <div className="col-lg-6 col-md-12">

        <GalleryGeneric
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

      <div className="col-lg-6 col-md-12">
        <GalleryGeneric
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

      <div className="col-lg-6 col-md-12">
        <GalleryGeneric
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

      <div className="col-lg-6 col-md-12">
        <div className="base-image-wrapper">
          <img src="/img/calendar_showcase.png" alt="" className="base-image" />

          <div className="image-label">
            <p className="image-title">Calendar UI component</p>
            <p className="image-chip">UI Component</p>
          </div>

        </div>
      </div>

      <div className="col-lg-6 col-md-12">
        <div className="base-image-wrapper">
          <img src="/img/turnover_flow_chart.png" alt="" className="base-image" />

          <div className="image-label">
            <p className="image-title">Turnovers Flow</p>
            <p className="image-chip">Feature</p>
          </div>

        </div>
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
