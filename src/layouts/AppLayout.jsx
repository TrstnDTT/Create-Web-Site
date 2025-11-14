import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';

const AppLayout = () => (
  <div className="app-shell">
    <Sidebar />
    <main className="app-content">
      <Outlet />
    </main>
  </div>
);

export default AppLayout;

