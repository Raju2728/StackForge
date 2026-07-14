/**
 * HtmlLearning.jsx
 * Main learning page with sidebar and topic viewer.
 */
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import TopicViewer from '../components/TopicViewer/TopicViewer';
import htmlModules from '../data/htmlModules';
import { useApp } from '../context/AppContext';
import './HtmlLearning.css';

export default function HtmlLearning() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { markTopicInProgress } = useApp();

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
        <TopicViewer topic={topic} totalTopics={htmlModules.length} />
      </div>
    </div>
  );
}
