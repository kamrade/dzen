import { FC } from 'react';
import s from './b2bcards.module.scss';
import { GalleryImage, SectionHead, SectionSeparator } from '~/uikit';
import { headDataDescription } from './b2b-head-data';
import { b2bImages } from "./b2b-images.ts";
import { moveElementToFront } from "~/helpers";

export interface B2bCardsSectionProps {
  sectionNumber: string;
}

export const B2bCardsSection: FC<B2bCardsSectionProps> = ({ sectionNumber }) => (
  <div className={s.b2bSection}>

    <SectionSeparator/>

    <div className="mb-5">
      <SectionHead number={sectionNumber} description={headDataDescription}/>
    </div>

    <div className="row mb-5">
      <div className="offset-xl-8 col-xl-16">
        <h2 className={s.title}>B2B Cards. Issuing payment cards and provides solutions enabling clients to launch their own card programs</h2>
      </div>
    </div>

    <div className="row mb-3">
      <div className="col-md-12">
        <GalleryImage
          noFrame={true}
          images={b2bImages}
          previewImage={b2bImages[0]}
        />
      </div>

      <div className="offset-md-2 col-md-10">
        <div className="mb-5">
          <h3>Key Offerings</h3>
          Payment Card Solutions
          <div><b>Card Issuance:</b> Physical & virtual cards, end-to-end support</div>
          <div><b>Custom Programs:</b> Branded card solutions for businesses</div>
          <div><b>Payment Processing:</b> Secure & efficient transactions</div>
          <div><b>Compliance & Security:</b> Regulatory adherence & data protection</div>
          <div><b>Technology Integration:</b> APIs for seamless system connection</div>
          <div><b>Customer Support:</b> Expert assistance for setup & management</div>
        </div>

        <div className={s.box}>
          <div>
            An incredibly convenient system. We were able to provide all our employees with our cards in just a few clicks, almost instantly.
          </div>
        </div>

      </div>
    </div>

    <div className="row">
      <h3 className="mb-3">Key Achievements as a Product Designer for B2B Cards</h3>
      <div className="col-md-8">
        <ul className={s.list}>
          <li>End-to-End User-Centric Design</li>
          <li>White-Label Branding Solutions</li>
          <li>Modular Architecture Integration</li>
          <li>Data-Driven Iterations</li>
          <li>Collaboration & Leadership</li>
        </ul>
      </div>

      <div className="col-md-8">
        Box
      </div>

      <div className="col-md-8">
        <GalleryImage
          noFrame={true}
          images={moveElementToFront(b2bImages, 3)}
          previewImage={b2bImages[3]}
        />
      </div>


      {/*<div className="col-md-12">*/}
      {/*  <GalleryImage*/}
      {/*    noFrame={true}*/}
      {/*    images={moveElementToFront(b2bImages, 1)}*/}
      {/*    previewImage={b2bImages[1]}*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<div>*/}
      {/*  <GalleryImage*/}
      {/*    noFrame={true}*/}
      {/*    images={moveElementToFront(b2bImages, 2)}*/}
      {/*    previewImage={b2bImages[2]}*/}
      {/*  />*/}
      {/*</div>*/}


    </div>


  </div>
);
