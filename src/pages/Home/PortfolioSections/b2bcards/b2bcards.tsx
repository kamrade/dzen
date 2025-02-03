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
        <h2>B2B Cards. A company that specializes in issuing payment cards and provides solutions enabling clients to launch their own card programs</h2>
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
      <div className="offset-md-4 col-md-8">
        <h3>Key Offerings</h3>

          Card Issuance Services: End-to-end support for issuing physical and virtual payment cards.
          Custom Card Programs: Tailored solutions for businesses to launch branded card programs.
          Payment Processing: Secure and efficient transaction processing.
          Compliance and Security: Robust systems to ensure regulatory compliance and data protection.
          Technology Integration: APIs and platforms for seamless integration with existing systems.
          Customer Support: Dedicated assistance for program setup, management, and optimization.

        We are a leading provider of payment card solutions, specializing in the issuance of branded payment cards and offering comprehensive, customizable platforms for businesses to create and manage their own card programs. Our end-to-end services empower clients to design, launch, and operate payment cards tailored to their unique needs, whether for loyalty programs, corporate expenses, or consumer banking.

        Our solutions include card design, payment processing, compliance management, and advanced technology integration, ensuring seamless and secure transactions. By leveraging our expertise, businesses can enhance customer engagement, streamline financial operations, and unlock new revenue streams through innovative payment solutions.

      </div>
    </div>

    <div className="row">
      <div className="offset-md-4 col-md-8">
        <GalleryImage
          noFrame={true}
          images={moveElementToFront(b2bImages, 3)}
          previewImage={b2bImages[3]}
        />
      </div>
      <div className="col-md-12 mb-3">
        <div className="row mb-3">
          <div className="offset-md-2 col-md-10">
            <h3>Key Achievements as a Product Designer for B2B Cards</h3>
            <ul style={{
              listStyle: 'none',
              margin: '0',
              padding: '0'
            }}>
              <li>End-to-End User-Centric Design</li>
              <li>White-Label Branding Solutions</li>
              <li>Innovative Modular Architecture Integration</li>
              <li>Security-First Design</li>
              <li>Cross-Platform Consistency</li>
              <li>Data-Driven Iterations</li>
              <li>Collaboration & Leadership</li>
            </ul>
          </div>
          <div className="col-md-12">
            <GalleryImage
              noFrame={true}
              images={moveElementToFront(b2bImages, 1)}
              previewImage={b2bImages[1]}
            />
          </div>
        </div>
        <div>
          <GalleryImage
            noFrame={true}
            images={moveElementToFront(b2bImages, 2)}
            previewImage={b2bImages[2]}
          />
        </div>


      </div>
    </div>


  </div>
);
