const fallbackNav = ['Accueil', 'Expérience', 'Contact'];

const DemoMenuPreview = ({ demo, accent }) => {
  const navItems = demo.menu?.nav?.length ? demo.menu.nav : fallbackNav;
  const highlights = demo.highlights?.slice(0, 3) ?? [];

  return (
    <div className="demo-menu" style={{ borderColor: accent }}>
      <header className="demo-menu__header">
        <span className="demo-menu__brand">{demo.title}</span>
        <nav aria-label={`Navigation ${demo.title}`}>
          {navItems.map((item) => (
            <button key={item} type="button">
              {item}
            </button>
          ))}
        </nav>
        <button className="demo-menu__toggle" type="button" aria-label="Ouvrir le menu">
          ···
        </button>
      </header>
      <div className="demo-menu__hero">
        <p className="demo-menu__eyebrow">{demo.style}</p>
        <h4>{demo.summary}</h4>
        <div className="demo-menu__actions">
          <button type="button" className="btn btn--primary">
            Réserver
          </button>
          <button type="button" className="btn btn--ghost">
            En savoir plus
          </button>
        </div>
      </div>
      {highlights.length > 0 && (
        <ul className="demo-menu__list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DemoMenuPreview;

