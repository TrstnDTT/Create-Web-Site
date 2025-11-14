import { NavLink } from 'react-router-dom';
import { categories } from '../data/categories.js';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__logo">
      <span className="logo-pill">NovaCraft</span>
      <p>Studio digital spécialisé dans les sites métiers.</p>
    </div>

    <nav className="sidebar__nav" aria-label="Navigation des secteurs">
      <p className="sidebar__nav-label">Exploration par secteur</p>
      <ul>
        {categories.map(({ slug, label, icon: Icon, accent }) => (
          <li key={slug}>
            <NavLink
              to={`/categorie/${slug}`}
              className={({ isActive }) =>
                `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
              }
            >
              <span className="sidebar__icon" style={{ color: accent }}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

    <div className="sidebar__cta">
      <p>Besoin d'une démo personnalisée ?</p>
      <a href="mailto:hello@novacraft.studio" className="btn btn--ghost">
        Échanger avec nous
      </a>
    </div>
  </aside>
);

export default Sidebar;

