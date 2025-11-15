import { Link, Navigate, useParams } from 'react-router-dom';
import { categories } from '../data/categories.js';
import DemoMiniSite from '../components/DemoMiniSite.jsx';

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
      <DemoMiniSite category={category} demo={demo} />
    </div>
  );
};

export default Demo;

