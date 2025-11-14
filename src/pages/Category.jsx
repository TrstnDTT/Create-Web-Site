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
          <p>
            Chaque template est construit sur mesure pour répondre aux usages de vos clients tout en
            optimisant la conversion. Motion subtile, micro-interactions et hiérarchies claires.
          </p>
          <Link to="/#contact" className="btn btn--primary">
            Briefer l\'équipe
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

