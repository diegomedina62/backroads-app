import Titles from './Titles';
import { servicesData } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Titles title="Our" subtitle="Services" />

      <div className="section-center services-center">
        {servicesData.map((x) => {
          return (
            <article key={x.id} className="service">
              <span className="service-icon">
                <i className={x.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{x.title}</h4>
                <p className="service-text">{x.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
