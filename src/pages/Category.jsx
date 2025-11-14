import { Link, Navigate, useParams } from 'react-router-dom';
import DemoCard from '../components/DemoCard.jsx';
import { categories } from '../data/categories.js';

const Category = () => {
  const { slug } = useParams();
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page fade-in">
      <section className="category-hero" style={{ borderColor: category.accent }}>
        <div className="category-hero__content">
          <p className="hero__eyebrow">Univers {category.label}</p>
          <h1>{category.description}</h1>
          <p>{category.intro}</p>
          {category.manifesto?.length > 0 && (
            <ul className="pill-list">
              {category.manifesto.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {category.metrics?.length > 0 && (
            <div className="stat-pills" role="list">
              {category.metrics.map((metric) => (
                <div key={metric.label} className="stat-pill" role="listitem">
                  <span className="stat-pill__value">{metric.value}</span>
                  <span className="stat-pill__label">{metric.label}</span>
                </div>
              ))}
            </div>
          )}
          <Link to="/#contact" className="btn btn--primary">
            Briefer l'équipe
          </Link>
        </div>
        <div className="category-hero__visual">
          <img src={category.heroImage} alt={category.label} loading="lazy" />
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Sélection {category.label}</h2>
          <p>Choisissez un concept et accédez aux détails du mock-up.</p>
        </div>
        <div className="demo-grid">
          {category.demos.map((demo) => (
            <DemoCard key={demo.id} categorySlug={category.slug} demo={demo} accent={category.accent} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;

