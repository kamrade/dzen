import { FC } from 'react';
import { EWSSection, B2bCardsSection } from './PortfolioSections';

export interface IPortfolioSectionProps {

}

export const PortfolioSection: FC<IPortfolioSectionProps> = () => (
  <div className="container">
    <B2bCardsSection sectionNumber={'01'} />
    <EWSSection sectionNumber={'02'} />
  </div>
)
