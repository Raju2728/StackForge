/**
 * App.jsx
 * Root application component with routing.
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header/Header';
import Home from './pages/Home';
import HtmlLearning from './pages/HtmlLearning';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import Playground from './pages/Playground';
import FinalProject from './pages/FinalProject';
import LockedModule from './pages/LockedModule';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn/:topicId" element={<HtmlLearning />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/final-project" element={<FinalProject />} />
            <Route path="/css" element={<LockedModule />} />
            <Route path="/javascript" element={<LockedModule />} />
          </Routes>
        </main>
      </AppProvider>
    </BrowserRouter>
  );
}
