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
import SEO from '../components/SEO/SEO';
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

  const topicSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${topic.title} - HTML Learning Module`,
    description: topic.explanation,
    articleSection: topic.category || 'HTML',
    isPartOf: {
      '@type': 'Course',
      name: 'HTML5 Web Structure & Semantics',
      url: 'https://stack-learner.vercel.app/learn/1',
    },
  };

  return (
    <div className="html-learning-layout">
      <SEO
        title={`${topic.title} — HTML Course`}
        description={topic.explanation?.slice(0, 155) || `Learn ${topic.title} with real-world analogies, code examples, and practice on Stack Learner.`}
        canonical={`/learn/${topic.id}`}
        keywords={`html ${topic.title.toLowerCase()}, learn html, html course, web development`}
        schema={topicSchema}
      />
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
