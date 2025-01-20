// import { galleryB2BCardsData, galleryEWData, gallerySidebarData } from '~/pages/Home/gallery-data.ts';
// import { GalleryImage } from '~/uikit';

import { FC } from 'react';
import { EWSSection } from './PortfolioSections/ews';

export interface IPortfolioSectionProps {

}

export const PortfolioSection: FC<IPortfolioSectionProps> = () => (
  <div className="container">
    <EWSSection></EWSSection>
  </div>
)
