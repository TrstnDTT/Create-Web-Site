const themeLibrary = {
  restauration: {
    nav: ['Carte', 'Expérience', 'Réserver'],
    heroEyebrow: 'Cuisine signature',
    buttons: ['Découvrir la carte', 'Réserver une table'],
    cta: 'Parler au maître d’hôtel',
    accent: 'linear-gradient(135deg, rgba(255, 140, 91, 0.25), rgba(23, 15, 27, 0.8))',
  },
  coiffure: {
    nav: ['Looks', 'Expertises', 'Prendre RDV'],
    heroEyebrow: 'Studio capillaire',
    buttons: ['Voir le lookbook', 'Réserver'],
    cta: 'Parler à un expert',
    accent: 'linear-gradient(135deg, rgba(233, 111, 208, 0.3), rgba(10, 8, 14, 0.85))',
  },
  immobilier: {
    nav: ['Programmes', 'Investir', 'Contact'],
    heroEyebrow: 'Vitrines premium',
    buttons: ['Explorer les biens', 'Planifier une visite'],
    cta: 'Fixer une visite',
    accent: 'linear-gradient(135deg, rgba(92, 122, 234, 0.25), rgba(12, 18, 34, 0.8))',
  },
  evenementiel: {
    nav: ['Shows', 'Services', 'Brief'],
    heroEyebrow: 'Expériences live',
    buttons: ['Construire un show', 'Demander un devis'],
    cta: 'Envoyer un brief',
    accent: 'linear-gradient(135deg, rgba(255, 179, 71, 0.35), rgba(10, 5, 12, 0.85))',
  },
  photographie: {
    nav: ['Portfolio', 'Services', 'Booking'],
    heroEyebrow: 'Studio créatif',
    buttons: ['Voir le portfolio', 'Booker un shooting'],
    cta: 'Planifier une séance',
    accent: 'linear-gradient(135deg, rgba(157, 123, 255, 0.3), rgba(10, 6, 18, 0.85))',
  },
  artisans: {
    nav: ['Savoir-faire', 'Projets', 'Devis'],
    heroEyebrow: 'Expertise locale',
    buttons: ['Voir nos services', 'Demander un devis'],
    cta: 'Être rappelé',
    accent: 'linear-gradient(135deg, rgba(244, 184, 96, 0.35), rgba(22, 16, 10, 0.9))',
  },
  default: {
    nav: ['Accueil', 'Services', 'Contact'],
    heroEyebrow: 'Expérience digitale',
    buttons: ['Découvrir', 'Parler à un expert'],
    cta: 'Être rappelé',
    accent: 'linear-gradient(135deg, rgba(124, 93, 255, 0.25), rgba(6, 8, 18, 0.9))',
  },
};

const DemoMiniSite = ({ category, demo }) => {
  const preset = themeLibrary[category.slug] ?? themeLibrary.default;
  const company = demo.company ?? {
    name: demo.title,
    tagline: demo.summary,
    hero: { title: demo.title, subtitle: demo.summary },
    about: demo.summary,
    highlights: demo.highlights ?? [],
    services: [],
    contact: {},
  };
  const navItems = preset.nav ?? ['Accueil', 'Services', 'Contact'];
  const services = company.services ?? [];
  const highlights = company.highlights ?? [];
  const contact = company.contact ?? {};

  return (
    <section className="mini-site">
      <header className="mini-site__header" style={{ background: preset.accent }}>
        <div className="mini-site__brand">
          <span>{company.name}</span>
          <small>{company.tagline}</small>
        </div>
        <nav aria-label={`Menu ${company.name}`}>
          {navItems.map((item) => (
            <button key={item} type="button">
              {item}
            </button>
          ))}
        </nav>
        <button type="button" className="btn btn--ghost mini-site__cta">
          {preset.cta}
        </button>
      </header>

      <div className="mini-site__hero">
        <div className="mini-site__hero-copy">
          <p className="mini-site__eyebrow">{preset.heroEyebrow}</p>
          <h1>{company.hero?.title ?? demo.title}</h1>
          <p>{company.hero?.subtitle ?? demo.summary}</p>
          <div className="mini-site__actions">
            <button type="button" className="btn btn--primary">
              {preset.buttons[0]}
            </button>
            <button type="button" className="btn btn--ghost">
              {preset.buttons[1]}
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
            {contact.phone && (
              <li>
                <strong>Téléphone</strong>
                <span>{contact.phone}</span>
              </li>
            )}
            {contact.email && (
              <li>
                <strong>Email</strong>
                <span>{contact.email}</span>
              </li>
            )}
            {contact.address && (
              <li>
                <strong>Adresse</strong>
                <span>{contact.address}</span>
              </li>
            )}
            {contact.hours && (
              <li>
                <strong>Horaires</strong>
                <span>{contact.hours}</span>
              </li>
            )}
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

