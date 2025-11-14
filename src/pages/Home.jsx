import { Link } from 'react-router-dom';
import { categories } from '../data/categories.js';
import CategoryCard from '../components/CategoryCard.jsx';

const Home = () => (
  <div className="page page--home fade-in">
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Agence portfolio</p>
        <h1>
          Nous créons des sites web modernes, performants et adaptés à chaque métier. Explorez nos
          démos par secteur.
        </h1>
        <p className="hero__lead">
          NovaCraft Studio imagine des expériences digitales sur-mesure pour les marques qui veulent
          marquer les esprits. Choisissez votre univers et plongez dans nos concepts.
        </p>
        <div className="hero__actions">
          <Link to="/categorie/tech" className="btn btn--primary">
            Voir une démo Tech
          </Link>
          <a href="mailto:hello@novacraft.studio" className="btn btn--ghost">
            Discuter d'un projet
          </a>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__visual-card">
          <p>+38 projets lancés en 2024</p>
          <span>UI/UX — Motion — Webflow/React</span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80"
          alt="Console design interface"
        />
      </div>
    </section>

    <section className="section" aria-labelledby="categories-heading">
      <div className="section__header">
        <h2 id="categories-heading">Explorez nos univers métiers</h2>
        <p>Chaque secteur possède une approche UI dédiée, testée et optimisée pour convertir.</p>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>

    <section id="contact" className="contact-panel" aria-labelledby="contact-heading">
      <div className="contact-panel__content">
        <p className="hero__eyebrow">Co-création</p>
        <h2 id="contact-heading">Parlons de votre prochaine expérience digitale</h2>
        <p>
          Nous imaginons des interfaces accessibles, rapides et pensées pour tous les supports. Partagez
          vos objectifs et nous concevons une démonstration sur mesure en quelques jours.
        </p>
        <div className="contact-panel__badges">
          <span>Audit UX offert</span>
          <span>Livraison 10 jours</span>
          <span>100% responsive</span>
        </div>
      </div>
      <div className="contact-panel__actions">
        <a href="mailto:hello@novacraft.studio" className="btn btn--primary">
          Discuter d'un projet
        </a>
        <a href="tel:+33180000000" className="btn btn--ghost">
          +33 1 80 00 00 00
        </a>
      </div>
    </section>
  </div>
);

export default Home;

