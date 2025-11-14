import { Link, Navigate, useParams } from 'react-router-dom';
import { categories } from '../data/categories.js';

const Demo = () => {
  const { slug, demoId } = useParams();
  const category = categories.find((item) => item.slug === slug);
  const demo = category?.demos.find((item) => item.id === demoId);

  if (!category || !demo) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page fade-in">
      <div className="demo-breadcrumb">
        <Link to={`/categorie/${slug}`}>← Retour {category.label}</Link>
      </div>

      <section className="demo-hero" style={{ borderColor: category.accent }}>
        <div className="demo-hero__content">
          <p className="hero__eyebrow">{category.label}</p>
          <h1>{demo.title}</h1>
          <p>{demo.summary}</p>
          <div className="demo-hero__actions">
            <a href={demo.demoUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
              Accéder à la démo
            </a>
            <a href="mailto:hello@novacraft.studio" className="btn btn--ghost">
              Demander une adaptation
            </a>
          </div>
        </div>
        <div className="demo-hero__mockup">
          <div className="mockup-frame" style={{ borderColor: category.accent }}>
            <img src={demo.image} alt={demo.title} loading="lazy" />
          </div>
          <span>Mock-up haute-fidélité</span>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Intentions créatives</h2>
          <p>{demo.style}</p>
        </div>
        <div className="demo-details">
          <div>
            <h3>Expérience</h3>
            <p>
              Architecture modulaire, transitions fluides et animations micro-interactives. Nous
              faisons respirer le contenu en alternant sections immersives et blocs fonctionnels.
            </p>
          </div>
          <div>
            <h3>Focus conversion</h3>
            <ul>
              <li>CTA sticky multi-devices</li>
              <li>Sections preuves sociales</li>
              <li>Formulaires dynamiques</li>
              <li>Optimisation Core Web Vitals</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;

