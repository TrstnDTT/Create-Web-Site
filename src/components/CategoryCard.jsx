import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { slug, label, description, icon: Icon, accent } = category;

  return (
    <article className="category-card" style={{ borderColor: accent }}>
      <div className="category-card__icon" style={{ background: `${accent}20` }}>
        <Icon size={24} color={accent} />
      </div>
      <div>
        <h3>{label}</h3>
        <p>{description}</p>
      </div>
      <Link to={`/categorie/${slug}`} className="btn btn--secondary">
        Voir les démos
      </Link>
    </article>
  );
};

export default CategoryCard;

