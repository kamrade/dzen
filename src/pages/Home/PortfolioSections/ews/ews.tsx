import { FC } from 'react';
import s from './ews.module.scss';
import { IDescriptionBlock, SectionHead, SectionSeparator, GalleryImage } from '~/uikit';
import { images } from './images';
import {moveElementToFront} from "~/helpers";

export interface EWSSectionProps {

}

const headDataDescription: IDescriptionBlock[] = [{
  title: "Expertise",
  items: [
    "Web Development",
    "Backend Architecture",
    "Data Management",
    "API Integration",
    "Security"
  ]
}, {
  title: "Focus",
  items: [
    "User Interface",
    "Data-Driven Insights",
    "Real-Time Processing",
    "Scalability",
    "Cloud Infrastructure",
  ]
}, {
  title: "Features",
  items: [
    "Optimizations",
    "Admin Dashboard",
    "Back-Office Tools",
    "Data Visualisations",
    "Analytics"
  ]
}];



export const EWSSection: FC<EWSSectionProps> = () => (

  <div className="mb-5">

    <SectionSeparator />

    <SectionHead number={"01"} description={headDataDescription}  />

    <div className="row mb-5">
      <div className="offset-xl-8 col-xl-16">
        <h2>Extreme waves. Auto moto sports</h2>
      </div>
    </div>


    <div className="row mb-3">
      <div className="col-lg-14">
        <GalleryImage
          noFrame={true}
          images={images}
          previewImage={images[0]}
        />
      </div>

      <div className="d-block d-lg-none pt-3">
        <div className="text-muted">
          <h6>Info</h6>
        </div>
      </div>

      <div className="col-xl-4 col-lg-3 d-none d-lg-block">
        <div className="text-end text-muted" style={{ paddingTop: '5px' }}>
          <h6>Info</h6>
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


    <div className="row">

      <div className="offset-xl-4 col-xl-10 col-lg-12">
        <GalleryImage
          noFrame={true}
          images={moveElementToFront(images, 2)}
          previewImage={images[2]}
        />
      </div>

      <div className="col-xl-10 col-lg-12">
        <GalleryImage
          noFrame={true}
          images={moveElementToFront(images, 3)}
          previewImage={images[3]}
        />
      </div>

    </div>


    <div className="row">

      <div className="col-lg-4">
        <div className={s.blackBox}></div>
      </div>

      <div className="col-lg-8">
        <p className={s.quote}>
          Everything you need for racing insights
        </p>
        <p className={s.quoteAuthor}>
          Alex Turner
        </p>
      </div>

      <div className="col-lg-12">
        <GalleryImage
          noFrame={true}
          images={moveElementToFront(images, 1)}
          previewImage={images[1]}
        />
      </div>
    </div>


    <div className="row">
      <div className="col-lg-18">
        <GalleryImage
          noFrame={true}
          images={moveElementToFront(images, 4)}
          previewImage={images[4]}
        />
      </div>
    </div>


  </div>

);
