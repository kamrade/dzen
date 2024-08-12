import s from './About.module.scss';
import { aboutScheme as d } from './about-scheme';

export const About = () => {
  return (
    <div className="AboutPage">
      <div className="container">

        <div className={s.cv}>
          
          <h2 className={s.cvTitle}>{d.title}</h2>
          <h1 className={s.cvName}>{d.name}</h1>
          
          
          <div className="row">
            <div className="col-lg-12">
              <div className={s.cvLabel}>{d.label}</div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="text-secondary">{d.email}</div>
              </div>
            <div className="col-lg-6 col-md-12">
              <div className="text-secondary">{d.langs}</div>
            </div>
          </div>

          <hr className={s.divider} />

          <div className="row">
            {d.skills.map((skill, i) => (
              <div className="col-md-12" key={i}>
                <div className={s.skillBlock}>
                  <h3 className={s.subtitle2}>{skill.title}</h3>
                  <div className={s.skillDescription}>{skill.text}</div>
                </div>
              </div>
            ))}
          </div>

          <hr className={s.divider} />

          <div className={s.experience}>
            <div className="mb-3"><h3 className={s.subtitle1}>{d.experience.title}</h3></div>

            {d.experience.list.map((exp, i) => (

              <div key={i}>
                <div className={`row ${s.DateOuter}`}>
                  <div className={`col-md-6 pb-5 ${s.DateInner}`}>
                    <div className={s.dates}>{exp.dates}</div>
                    <div>{exp.position}</div>
                  </div>
                  <div className="col-md-18 pb-5">
                    <div><b>{exp.location}</b></div>
                    <div className={'text-secondary mb-3'}>{exp.aboutCompany}</div>
                    <div>{exp.myParticipation}</div>
                  </div>
                </div>
              </div>

            ))}

          </div>

          <h3 className={s.quote}>
            craft user-friendly and visually appealing digital experiences by understanding user needs, conducting research, and collaborating with teams. shaping intuitive designs that align with both user expectations and business goals through prototyping and iterative testing.
          </h3>

        </div>

      </div>
    </div>
  );
}
