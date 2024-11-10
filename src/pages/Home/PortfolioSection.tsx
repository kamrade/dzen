// import { galleryB2BCardsData, galleryEWData, gallerySidebarData } from '~/pages/Home/gallery-data.ts';
// import { GalleryImage } from '~/uikit';

import { FC } from 'react';
import s from './PortfolioSection.module.scss';

export interface IPortfolioSectionProps {

}

export const PortfolioSection: FC<IPortfolioSectionProps> = ({}) => (
  <div className={s.PortfolioSection}>
    <div className="container">
      <div className={s.PortfolioSectionContent}>


        <div className="row mb-5 pb-5">
          <div className="col-md-12">
            <div className="mb-3">Project Number</div>
            <div className={s.ProjectNumber}>
              01
              <span className={s.NumberOf}>
            /06
          </span>
            </div>
          </div>
          <div className="col-md-12">

            <div className="row">
              <div className="col-md-8">
                <div className='mb-3'>Expertise</div>
                <div>
                  Web Development<br />
                  Backend Architecture<br />
                  Data Management<br />
                  API Integration<br />
                  Security
                </div>
              </div>

              <div className="col-md-8">
                <div className='mb-3'>Focus</div>
                <div>
                  User Interface<br />
                  Data-Driven Insights<br />
                  Real-Time Processing<br />
                  Scalability<br />
                  Cloud Infrastructure<br />
                  Security
                </div>
              </div>

              <div className="col-md-8">
                <div className='mb-3'>Features</div>
                <div>
                  Optimizations<br />
                  Admin Dashboard<br />
                  Back-Office Tools<br />
                  Data Visualization<br />
                  Analytics<br />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-12"></div>
          <div className="col-md-12">
            <h2 className={s.title}>Extreme waves. Auto moto sports</h2>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-14">
            <div className={s.imageContainer} style={{
              backgroundImage: 'url(/img/ews_slide_01.jpg)'
            }} />
          </div>
          <div className="col-md-4">
            <div className="text-end">
              <p className={s.label}>
                Info
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <p className={s.introText}>
              Advanced web infrastructure designed specifically for racing enthusiasts and automotive professionals. It serves as a centralized hub featuring a detailed catalog of racing cars, race tracks, and motorsport events, along with in-depth reviews and performance analytics. With a dynamic landing page, powerful admin dashboard, and secure back-office, this system enables both public users and internal teams to access and manage a wealth of data on cars, tracks, and racing history.
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-7"></div>
          <div className="col-md-7">
            <div className={s.imageContainer} style={{
              backgroundImage: 'url(/img/ews_slide_03.jpg)',
            }} />
          </div>
          <div className="col-md-10">
            <div className={s.imageContainer} style={{
              backgroundImage: 'url(/img/ews_slide_02.jpg)',
            }} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-7">
            <div className={s.imageContainer} style={{
              backgroundImage: 'url(/img/ews_slide_05.jpg)',
            }} />
          </div>
          <div className="col-md-7">
            <p className={s.quote}>
              Everything you need for racing insights
            </p>
            <p className={s.quoteAuthor}>
              Alex Turner
            </p>
          </div>
          <div className="col-md-3">
            <div className={s.blackBox}></div>
          </div>
          <div className="col-md-7">
            <div className={s.imageContainer} style={{
              backgroundImage: 'url(/img/ews_slide_04.jpg)',
            }} />
          </div>
        </div>

      </div>
    </div>
  </div>
)
