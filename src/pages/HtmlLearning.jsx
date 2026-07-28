/**
 * HtmlLearning.jsx
 * Main HTML learning page with sidebar and enhanced topic viewer.
 */
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import TopicViewerEnhanced from '../components/TopicViewer/TopicViewerEnhanced';
import htmlModules from '../data/htmlModules';
import { useApp } from '../context/AppContext';
import './HtmlLearning.css';

const HTML_ACCENT = '#6366f1';

export default function HtmlLearning() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const {
    markTopicInProgress,
    markTopicComplete,
    getTopicStatus,
    showToast,
  } = useApp();

  const currentId = parseInt(topicId) || 1;
  const topic = htmlModules.find(m => m.id === currentId);

  // Mark topic as in-progress on visit
  useEffect(() => {
    if (topic) {
      markTopicInProgress(topic.id);
    }
  }, [topic, markTopicInProgress]);

  // Redirect if topic not found
  useEffect(() => {
    if (!topic) {
      navigate('/learn/1');
    }
  }, [topic, navigate]);

  if (!topic) return null;

  return (
    <div className="html-learning-layout">
      <Sidebar />
      <div className="html-learning-content">
        <TopicViewerEnhanced
          topic={topic}
          totalTopics={htmlModules.length}
          basePath="/learn"
          courseIcon="🧱"
          courseName="HTML"
          accentColor={HTML_ACCENT}
          markComplete={markTopicComplete}
          markInProgress={markTopicInProgress}
          getStatus={getTopicStatus}
          showToast={showToast}
        />
      </div>
    </div>
  );
}
