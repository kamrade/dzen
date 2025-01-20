import { FC } from 'react';
import { EWSSection, B2bCardsSection } from './PortfolioSections';

export interface IPortfolioSectionProps {

}

export const PortfolioSection: FC<IPortfolioSectionProps> = () => (
  <div className="container">
    <EWSSection />
    <B2bCardsSection/>
  </div>
)
