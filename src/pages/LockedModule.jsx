/**
 * LockedModule.jsx
 * Displays locked CSS or JavaScript module page.
 */
import { useLocation } from 'react-router-dom';
import LockedModuleCard from '../components/LockedModuleCard/LockedModuleCard';
import './LockedModule.css';

export default function LockedModule() {
  const location = useLocation();
  const isCSS = location.pathname.includes('css');
  const moduleName = isCSS ? 'CSS' : 'JavaScript';
  const icon = isCSS ? '🎨' : '⚡';

  return (
    <div className="locked-module-page">
      <LockedModuleCard moduleName={moduleName} icon={icon} />
    </div>
  );
}
