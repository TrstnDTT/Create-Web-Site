import { Link } from 'react-router-dom';

const DemoSite = ({ category, demo }) => {
  const features = demo.highlights?.length ? demo.highlights : [demo.style];
  const pills = [
    ...(category.metrics ?? []),
    { label: 'Objectif immersion', value: demo.immersion?.kpi ?? '+40%' },
  ].slice(0, 3);
  const galleryTokens = demo.gallery ?? [];
  const palette = demo.immersion?.palette ?? [category.accent, '#ffffff'];

  return (
    <section id="demo-site" className="demo-site" aria-label={`Démo ${demo.title}`}>
      <div className="demo-site__hero" style={{ borderColor: category.accent }}>
        <div className="demo-site__hero-copy">
          <p className="hero__eyebrow">{category.label}</p>
          <h2>{demo.title}</h2>
          <p>{demo.summary}</p>
          <div className="stat-pills" role="list">
            {pills.map((metric) => (
              <div key={metric.label} className="stat-pill" role="listitem">
                <span className="stat-pill__value">{metric.value}</span>
                <span className="stat-pill__label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="demo-site__hero-preview" aria-hidden="true">
          <div className="mockup-frame" style={{ borderColor: category.accent }}>
            <img src={demo.image} alt="" loading="lazy" />
          </div>
          <span>Preview haute-fidélité</span>
        </div>
      </div>

      <div className="demo-site__immersive" aria-label="Fragment immersif">
        <div className="immersive-fragment" style={{ borderColor: category.accent }}>
          <div className="immersive-fragment__preview">
            <div
              className="immersive-fragment__gradient"
              style={{
                background: `radial-gradient(circle at 20% 20%, ${palette[1] ?? palette[0]}, ${palette[0]} 55%)`,
              }}
            />
            <div className="immersive-fragment__overlay" style={{ borderColor: palette[2] ?? palette[0] }}>
              <span>{demo.immersion?.badge}</span>
              <p>{demo.immersion?.fragment}</p>
            </div>
          </div>
          <div className="immersive-fragment__copy">
            <h3>{demo.immersion?.fragment}</h3>
            <p>{demo.immersion?.description}</p>
            <div className="immersive-fragment__chips">
              <span>{demo.immersion?.badge}</span>
              <span>{demo.immersion?.kpi}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-site__section" aria-labelledby="intentions-heading">
        <div className="section__header">
          <h3 id="intentions-heading">Intentions clés</h3>
          <p>Les éléments UI qui différencient ce concept.</p>
        </div>
        <div className="feature-grid" role="list">
          {features.map((feature) => (
            <article key={feature} className="feature-card" role="listitem">
              <h4>{feature}</h4>
              <p>Composant responsive testé sur mobile-first avec interactions tactiles.</p>
            </article>
          ))}
        </div>
      </div>

      <div className="demo-site__section" aria-labelledby="gallery-heading">
        <div className="section__header">
          <h3 id="gallery-heading">Aperçus responsives</h3>
          <p>Variations desktop, tablette et mobile pour valider chaque viewport.</p>
        </div>
        <div className="gallery-mosaic">
          {galleryTokens.map((screen) => (
            <figure key={screen.label} className="gallery-mosaic__item" aria-label={screen.label}>
              <div
                className="gallery-mosaic__preview"
                style={{
                  background: `linear-gradient(135deg, ${screen.palette[0]}, ${screen.palette[1] ?? screen.palette[0]})`,
                }}
              >
                <span>{screen.label}</span>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="demo-site__cta">
        <h3>Prêt à activer {demo.title} ?</h3>
        <p>
          Nous adaptons cette base aux contenus, branding et contraintes techniques de votre équipe. Livraison
          sous 10 jours avec recettes croisées QA + accessibilité.
        </p>
        <div className="hero__actions">
          <a href="mailto:hello@novacraft.studio" className="btn btn--primary">
            Planifier un atelier
          </a>
          <Link to={`/categorie/${category.slug}`} className="btn btn--ghost">
            Voir d’autres univers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoSite;

