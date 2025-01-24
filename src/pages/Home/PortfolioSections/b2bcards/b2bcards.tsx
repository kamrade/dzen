import { FC } from 'react';
import s from './b2bcards.module.scss';
import { IDescriptionBlock, SectionHead, SectionSeparator } from '~/uikit';

export interface B2bCardsSectionProps {

}

const headDataDescription: IDescriptionBlock[] = [{
  title: "Technical Development",
  items: [
    "Designed and implemented the card issuance process",
    "Developed a user-friendly interface",
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

export const B2bCardsSection: FC<B2bCardsSectionProps> = () => (
  <div className={s.b2bSection}>

    <SectionSeparator />

    <div className="mb-5">
      <SectionHead number={"02"} description={headDataDescription}  />
    </div>
  </div>
);
