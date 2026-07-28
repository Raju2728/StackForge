/**
 * App.jsx
 * Root application component with routing.
 */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header/Header';
import Home from './pages/Home';
import HtmlLearning from './pages/HtmlLearning';
import CssLearning from './pages/CssLearning';
import JsLearning from './pages/JsLearning';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import Playground from './pages/Playground';
import FinalProject from './pages/FinalProject';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn/:topicId" element={<HtmlLearning />} />
            <Route path="/css/learn/:topicId" element={<CssLearning />} />
            <Route path="/css" element={<Navigate to="/css/learn/1" replace />} />
            <Route path="/js/learn/:topicId" element={<JsLearning />} />
            <Route path="/javascript" element={<Navigate to="/js/learn/1" replace />} />
            <Route path="/js" element={<Navigate to="/js/learn/1" replace />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/final-project" element={<FinalProject />} />
          </Routes>
        </main>
      </AppProvider>
    </BrowserRouter>
  );
}
