import Titles from './Titles';
import { tourData } from '../data';
import TourArticle from './TourArticle';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Titles title="Featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tourData.map((x) => {
          return <TourArticle key={x.id} {...x} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
