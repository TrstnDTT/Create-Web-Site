import { miniSiteThemes } from '../miniSites/themes.js';
import '../miniSites/styles/domainThemes.css';

const navLibrary = {
  restauration: ['Carte', 'Expérience', 'Réserver'],
  coiffure: ['Looks', 'Expertises', 'Prendre RDV'],
  immobilier: ['Programmes', 'Investir', 'Contact'],
  evenementiel: ['Shows', 'Services', 'Brief'],
  photographie: ['Portfolio', 'Services', 'Booking'],
  artisans: ['Savoir-faire', 'Projets', 'Devis'],
  default: ['Accueil', 'Services', 'Contact'],
};

const ctaLibrary = {
  restauration: { primary: 'Découvrir la carte', secondary: 'Réserver une table' },
  coiffure: { primary: 'Voir le lookbook', secondary: 'Réserver' },
  immobilier: { primary: 'Explorer les biens', secondary: 'Planifier une visite' },
  evenementiel: { primary: 'Construire un show', secondary: 'Demander un devis' },
  photographie: { primary: 'Voir le portfolio', secondary: 'Booker un shooting' },
  artisans: { primary: 'Voir nos services', secondary: 'Demander un devis' },
  default: { primary: 'Découvrir', secondary: 'Parler à un expert' },
};

const DemoMiniSite = ({ category, demo }) => {
  const themeKey = `${category.slug}-${demo.id}`;
  const theme = miniSiteThemes[themeKey] ?? miniSiteThemes.default;
  const navItems = navLibrary[category.slug] ?? navLibrary.default;
  const actions = ctaLibrary[category.slug] ?? ctaLibrary.default;
  const company = demo.company ?? {
    name: demo.title,
    tagline: demo.summary,
    hero: { title: demo.title, subtitle: demo.summary },
    about: demo.summary,
    highlights: demo.highlights ?? [],
    services: [],
    contact: {},
  };
  const services = company.services ?? [];
  const highlights = company.highlights ?? [];
  const contact = company.contact ?? {};
  const layoutClass = theme.layout ? `mini-site--${theme.layout}` : 'mini-site--split';

  const siteStyle = {
    '--site-bg': theme.colors.background,
    '--site-pattern': theme.pattern ?? 'none',
    '--site-surface': theme.colors.surface,
    '--site-card': theme.colors.card,
    '--site-border': theme.colors.border,
    '--site-text': theme.colors.text,
    '--site-muted': theme.colors.muted,
    '--site-accent': theme.colors.accent,
    '--site-btn-primary': theme.colors.buttonPrimary,
    '--site-btn-text': theme.colors.buttonText,
    '--site-font-heading': theme.fonts.heading,
    '--site-font-body': theme.fonts.body,
  };

  if (theme.heroImageRadius) {
    siteStyle['--site-hero-radius'] = theme.heroImageRadius;
  }

  const contactDetails = [
    contact.phone && { label: 'Téléphone', value: contact.phone },
    contact.email && { label: 'Email', value: contact.email },
    contact.address && { label: 'Adresse', value: contact.address },
    contact.hours && { label: 'Horaires', value: contact.hours },
  ].filter(Boolean);

  return (
    <section className={`mini-site ${layoutClass}`} style={siteStyle} data-theme={themeKey}>
      <header className="mini-site__header">
        <div className="mini-site__brand">
          <span>{company.name}</span>
          <small>{company.tagline ?? category.description}</small>
        </div>
        <nav aria-label={`Menu ${company.name}`}>
          {navItems.map((item) => (
            <button key={item} type="button">
              {item}
            </button>
          ))}
        </nav>
        <button type="button" className="btn btn--ghost mini-site__cta">
          {actions.secondary}
        </button>
      </header>

      <div className="mini-site__hero">
        <div className="mini-site__hero-copy">
          <p className="mini-site__eyebrow">{company.tagline ?? category.label}</p>
          <h1>{company.hero?.title ?? demo.title}</h1>
          <p>{company.hero?.subtitle ?? demo.summary}</p>
          <div className="mini-site__actions">
            <button type="button" className="btn btn--primary">
              {actions.primary}
            </button>
            <button type="button" className="btn btn--ghost">
              {actions.secondary}
            </button>
          </div>
        </div>
        <div className="mini-site__hero-visual">
          <img src={demo.image} alt={`Aperçu ${company.name}`} loading="lazy" />
          <span>{company.location ?? category.label}</span>
        </div>
      </div>

      <section className="mini-site__section mini-site__about">
        <div>
          <h2>À propos</h2>
          <p>{company.about}</p>
        </div>
        {highlights.length > 0 && (
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </section>

      {services.length > 0 && (
        <section className="mini-site__section mini-site__services">
          <h2>Nos offres</h2>
          <div className="mini-site__services-grid">
            {services.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.detail && <span>{service.detail}</span>}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="mini-site__section mini-site__contact">
        <div>
          <h2>Contact</h2>
          <ul>
            {contactDetails.map((detail) => (
              <li key={detail.label}>
                <strong>{detail.label}</strong>
                <span>{detail.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <form className="mini-site__form">
          <label>
            Votre nom
            <input type="text" name="name" placeholder="Camille Dupont" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="vous@exemple.fr" />
          </label>
          <label>
            Votre besoin
            <textarea name="message" rows="3" placeholder="Décrivez votre projet..." />
          </label>
          <button type="button" className="btn btn--primary">
            Envoyer la demande
          </button>
        </form>
      </section>
    </section>
  );
};

export default DemoMiniSite;

