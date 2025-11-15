const styleLibrary = {
  restauration: {
    nav: ['Menu', 'Expérience', 'Réservation'],
    heroEyebrow: 'Cuisine signature',
    buttons: ['Découvrir la carte', 'Réserver une table'],
    accent: 'linear-gradient(135deg, rgba(255, 140, 91, 0.25), rgba(23, 15, 27, 0.8))',
    cards: ['Menu dégustation', 'Atelier mixologie', 'Privatisation'],
  },
  coiffure: {
    nav: ['Looks', 'Expertises', 'Prendre RDV'],
    heroEyebrow: 'Studio capillaire',
    buttons: ['Voir le lookbook', 'Réserver'],
    accent: 'linear-gradient(135deg, rgba(233, 111, 208, 0.3), rgba(10, 8, 14, 0.85))',
    cards: ['Diagnostic express', 'Couleur signature', 'Rituels soins'],
  },
  immobilier: {
    nav: ['Programmes', 'Investir', 'Contact'],
    heroEyebrow: 'Vitrines premium',
    buttons: ['Explorer les biens', 'Planifier une visite'],
    accent: 'linear-gradient(135deg, rgba(92, 122, 234, 0.25), rgba(12, 18, 34, 0.8))',
    cards: ['Appartements', 'Lofts', 'Penthouse'],
  },
  evenementiel: {
    nav: ['Shows', 'Services', 'Brief'],
    heroEyebrow: 'Expériences live',
    buttons: ['Construire un show', 'Demander un devis'],
    accent: 'linear-gradient(135deg, rgba(255, 179, 71, 0.35), rgba(10, 5, 12, 0.85))',
    cards: ['Scénographie', 'Timeline live', 'Production'],
  },
  photographie: {
    nav: ['Portfolio', 'Services', 'Booking'],
    heroEyebrow: 'Studio créatif',
    buttons: ['Voir le portfolio', 'Booker un shooting'],
    accent: 'linear-gradient(135deg, rgba(157, 123, 255, 0.3), rgba(10, 6, 18, 0.85))',
    cards: ['Editorial', 'Mariage', 'Lifestyle'],
  },
  tech: {
    nav: ['Produit', 'Tarifs', 'Contact'],
    heroEyebrow: 'Plateforme SaaS',
    buttons: ['Voir la démo', 'Parler à l’équipe'],
    accent: 'linear-gradient(135deg, rgba(84, 210, 210, 0.35), rgba(7, 9, 18, 0.9))',
    cards: ['KPI live', 'Automations', 'Sécurité'],
  },
  default: {
    nav: ['Accueil', 'Services', 'Contact'],
    heroEyebrow: 'Expérience digitale',
    buttons: ['Découvrir', 'Parler à un expert'],
    accent: 'linear-gradient(135deg, rgba(124, 93, 255, 0.25), rgba(6, 8, 18, 0.9))',
    cards: ['Création', 'Stratégie', 'Support'],
  },
};

const DemoMiniSite = ({ category, demo }) => {
  const preset = styleLibrary[category.slug] ?? styleLibrary.default;
  const navItems = preset.nav;
  const heroSubtitle = demo.summary;
  const cards = demo.highlights?.slice(0, 3) ?? preset.cards;

  return (
    <section className="mini-site">
      <header className="mini-site__header" style={{ background: preset.accent }}>
        <div className="mini-site__brand">
          <span>{demo.title}</span>
          <small>{preset.heroEyebrow}</small>
        </div>
        <nav aria-label={`Menu ${demo.title}`}>
          {navItems.map((item) => (
            <button key={item} type="button">
              {item}
            </button>
          ))}
        </nav>
        <button type="button" className="btn btn--ghost mini-site__cta">
          {preset.buttons[1]}
        </button>
      </header>

      <div className="mini-site__hero">
        <div className="mini-site__hero-copy">
          <p className="mini-site__eyebrow">{preset.heroEyebrow}</p>
          <h1>{demo.title}</h1>
          <p>{heroSubtitle}</p>
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
          <img src={demo.image} alt={`Aperçu ${demo.title}`} loading="lazy" />
          <span>{category.label}</span>
        </div>

        <div className="mini-site__hero-card">
          <h4>Intentions design</h4>
          <ul>
            <li>Palette : {category.label}</li>
            <li>Style : {demo.style}</li>
            <li>Focus : {demo.immersion?.fragment ?? 'Expérience immersive'}</li>
          </ul>
        </div>
      </div>

      <div className="mini-site__grid">
        {cards.map((item, index) => (
          <article key={item} className="mini-site__card">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{preset.cards[index] ?? `Bloc ${index + 1}`}</h3>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DemoMiniSite;

