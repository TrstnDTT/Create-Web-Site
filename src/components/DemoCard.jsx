import { Link } from 'react-router-dom';

const DemoCard = ({ categorySlug, demo, accent }) => (
  <article className="demo-card" style={{ borderColor: `${accent}30` }}>
    <div className="demo-card__image">
      <img src={demo.image} alt={demo.title} loading="lazy" />
    </div>
    <div className="demo-card__body">
      <p className="demo-card__tag" style={{ color: accent, background: `${accent}15` }}>
        {demo.style}
      </p>
      <h3>{demo.title}</h3>
      <p>{demo.summary}</p>
    </div>
    <div className="demo-card__actions">
      <Link to={`/demo/${categorySlug}/${demo.id}`} className="btn">
        Voir la démo
      </Link>
    </div>
  </article>
);

export default DemoCard;

