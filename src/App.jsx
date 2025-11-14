import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import Demo from './pages/Demo.jsx';

const App = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/categorie/:slug" element={<Category />} />
      <Route path="/demo/:slug/:demoId" element={<Demo />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default App;

