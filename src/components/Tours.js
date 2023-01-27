import Titles from './Titles';
import { tourData } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Titles title="Featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tourData.map((x) => {
          const { id, img, date, title, text, location, period, price } = x;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img
                  src={img}
                  className="tour-img"
                  alt={`landscape of ${title}`}
                />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {location}
                  </p>
                  <p>{period}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
