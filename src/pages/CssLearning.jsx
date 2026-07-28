/**
 * CssLearning.jsx
 * CSS course learning page with sidebar and enhanced topic viewer.
 */
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CourseSidebar from '../components/CourseSidebar/CourseSidebar';
import TopicViewerEnhanced from '../components/TopicViewerEnhanced/TopicViewerEnhanced';
import cssModules from '../data/cssModules';
import { useApp } from '../context/AppContext';
import './HtmlLearning.css';

export default function CssLearning() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const {
    markCssTopicInProgress,
    markCssTopicComplete,
    getCssTopicStatus,
    completedCssTopics,
    cssProgress,
    TOTAL_CSS_TOPICS,
    showToast,
  } = useApp();

  const currentId = parseInt(topicId) || 1;
  const topic = cssModules.find(m => m.id === currentId);

  // Mark topic as in-progress on visit
  useEffect(() => {
    if (topic) {
      markCssTopicInProgress(topic.id);
    }
  }, [topic, markCssTopicInProgress]);

  // Redirect if topic not found
  useEffect(() => {
    if (!topic) {
      navigate('/css/learn/1');
    }
  }, [topic, navigate]);

  if (!topic) return null;

  return (
    <div className="html-learning-layout">
      <CourseSidebar
        modules={cssModules}
        courseTitle="🎨 CSS Course"
        basePath="/css/learn"
        completedTopics={completedCssTopics}
        totalTopics={TOTAL_CSS_TOPICS}
        progress={cssProgress}
        getTopicStatus={getCssTopicStatus}
      />
      <div className="html-learning-content">
        <TopicViewerEnhanced
          topic={topic}
          totalTopics={cssModules.length}
          basePath="/css/learn"
          courseIcon="🎨"
          courseLabel="CSS"
          markComplete={markCssTopicComplete}
          markInProgress={markCssTopicInProgress}
          getStatus={getCssTopicStatus}
          showToast={showToast}
        />
      </div>
    </div>
  );
}
