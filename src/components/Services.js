import Titles from './Titles';
import { servicesData } from '../data';
import ServiceArticle from './ServiceArticle';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Titles title="Our" subtitle="Services" />

      <div className="section-center services-center">
        {servicesData.map((x) => {
          return <ServiceArticle key={x.id} {...x} />;
        })}
      </div>
    </section>
  );
};
export default Services;
