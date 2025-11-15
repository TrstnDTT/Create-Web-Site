import { Link } from 'react-router-dom';

const DemoCard = ({ categorySlug, demo, accent }) => {
  const { immersion } = demo;

  return (
    <article className="immersive-card" style={{ '--accent-color': accent }}>
      <div className="immersive-card__preview" aria-hidden="true">
        <div className="immersive-card__viewport">
          <img src={demo.image} alt="" loading="lazy" />
          <span className="immersive-card__badge">{immersion?.badge}</span>
        </div>
        <div className="immersive-card__timeline">
          {immersion?.palette?.map((color) => (
            <span key={color} style={{ background: color }} />
          ))}
        </div>
      </div>

      <div className="immersive-card__body">
        <p className="immersive-card__tag">{demo.style}</p>
        <div>
          <h3>{demo.title}</h3>
          <p>{demo.summary}</p>
        </div>
        <div className="immersive-card__meta">
          <span>{immersion?.fragment}</span>
          <span>{immersion?.kpi}</span>
        </div>
      </div>

      <div className="immersive-card__actions">
        <p>{immersion?.description}</p>
        <Link to={`/demo/${categorySlug}/${demo.id}`} className="btn btn--primary">
          Explorer la démo
        </Link>
      </div>
    </article>
  );
};

export default DemoCard;

