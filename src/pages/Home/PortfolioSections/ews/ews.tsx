import { FC } from 'react';
import s from './ews.module.scss';

export interface EWSSectionProps {

}

export const EWSSection: FC<EWSSectionProps> = () => (

  <div className="mb-5">
    <div className="row mb-5 pb-5">
      <div className="col-xl-8 mb-xl-0 mb-5">
        <div className="mb-3">Project Number</div>
        <div className={s.ProjectNumber}>
          01
          <span className={s.NumberOf}>
                /06
              </span>
        </div>
      </div>
      <div className="col-xl-16">

        <div className="row">
          <div className="col-12 col-md-8 mb-md-0 mb-5">
            <div className='mb-3'><b>Expertise</b></div>
            <div>
              Web Development<br />
              Backend Architecture<br />
              Data Management<br />
              API Integration<br />
              Security
            </div>
          </div>

          <div className="col-12 col-md-8 mb-md-0 mb-5">
            <div className='mb-3'><b>Focus</b></div>
            <div>
              User Interface<br />
              Data-Driven Insights<br />
              Real-Time Processing<br />
              Scalability<br />
              Cloud Infrastructure<br />
              Security
            </div>
          </div>

          <div className="col-12 col-md-8">
            <div className='mb-3'><b>Features</b></div>
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

    <div className="row mb-5">

      <div className="offset-xl-8 col-xl-16">
        <h2 className={s.title}>Extreme waves. Auto moto sports</h2>
      </div>
    </div>

    <div className="row mb-3">
      <div className="col-lg-14">
        <img src="/img/ews_slide_01.jpg" alt="" className={s.image} />
      </div>

      <div className="d-block d-lg-none pt-3">
        <p className={s.label}>
          Info
        </p>
      </div>

      <div className="col-xl-4 col-lg-3 d-none d-lg-block">
        <div className="text-end">
          <p className={s.label}>
            Info
          </p>
        </div>
      </div>

      <div className="col-xl-6 col-lg-7">
        <p className={s.introText}>
          Advanced web infrastructure designed specifically for racing enthusiasts and automotive professionals. It
          serves as a centralized hub featuring a detailed catalog of racing cars, race tracks, and motorsport
          events, along with in-depth reviews and performance analytics. With a dynamic landing page, powerful admin
          dashboard, and secure back-office, this system enables both public users and internal teams to access and
          manage a wealth of data on cars, tracks, and racing history.
        </p>
      </div>
    </div>


    <div className="row mb-3">

      <div className="offset-xl-4 col-xl-10 col-lg-12">
        <img src="/img/ews_slide_03.jpg" alt="" className={s.image} />
      </div>

      <div className="col-xl-10 col-lg-12">
        <img src="/img/ews_slide_04.jpg" alt="" className={s.image} />
      </div>

    </div>


    <div className="row mb-3">

      <div className="col-md-4">
        <div className={s.blackBox}></div>
      </div>

      <div className="col-md-8">
        <p className={s.quote}>
          Everything you need for racing insights
        </p>
        <p className={s.quoteAuthor}>
          Alex Turner
        </p>
      </div>

      <div className="col-md-12">
        <img src="/img/ews_slide_02.jpg" alt="" className={s.image} />
      </div>

    </div>


    <div className="row">
      <div className="col-md-18">
        <img src="/img/ews_slide_05.jpg" alt="" className={s.image} />
      </div>
    </div>


  </div>

);
