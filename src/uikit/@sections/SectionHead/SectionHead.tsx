import { FC } from 'react';
import s from './SectionHead.module.scss';

export interface IDescriptionBlock {
  title: string;
  items: string[];
}

export interface ISectionHeadProps {
  number: string;
  description: IDescriptionBlock[];
}

export const SectionHead: FC<ISectionHeadProps> =
({ number, description }) => (

  <div className="SectionHead">
    <div className="row mb-5 pb-5">

      <div className="col-xl-8 mb-xl-0 mb-5">
        <div className="mb-3">Project Number</div>
        <div className={s.ProjectNumber}>
          {number}
          <span className={s.NumberOf}>/06</span>
        </div>
      </div>

      <div className="col-xl-16">
        <div className="row">
          {description.map((item) => (
            <div className="col-12 col-md-8 mb-md-0 mb-5">
              <div className="mb-3"><b>{item.title}</b></div>
              <div>
                {item.items.map((tag) => (
                  <div>{tag}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);
