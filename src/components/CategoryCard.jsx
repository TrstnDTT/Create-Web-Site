import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { slug, label, description, icon: Icon, accent, manifesto = [] } = category;

  return (
    <article className="category-card" style={{ borderColor: accent }}>
      <div className="category-card__header">
        <div className="category-card__icon" style={{ background: `${accent}1a` }}>
          <Icon size={24} color={accent} aria-hidden="true" />
        </div>
        <div>
          <p className="category-card__eyebrow">Univers</p>
          <h3>{label}</h3>
        </div>
      </div>
      <p>{description}</p>
      {manifesto.length > 0 && (
        <ul className="category-card__tags">
          {manifesto.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <Link to={`/categorie/${slug}`} className="btn btn--secondary" aria-label={`Voir les démos ${label}`}>
        Voir les démos
      </Link>
    </article>
  );
};

export default CategoryCard;

