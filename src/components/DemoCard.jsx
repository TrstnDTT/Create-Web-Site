import { useState } from 'react';
import DemoMenuPreview from './DemoMenuPreview.jsx';

const DemoCard = ({ categorySlug, demo, accent }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <button
          type="button"
          className="btn btn--primary"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? 'Masquer le menu' : 'Voir la démo'}
        </button>
      </div>

      {isOpen && (
        <div className="immersive-card__menu">
          <DemoMenuPreview demo={demo} accent={accent} />
        </div>
      )}
    </article>
  );
};

export default DemoCard;

