/**
 * JsLearning.jsx
 * JavaScript course learning page with sidebar and enhanced topic viewer.
 */
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CourseSidebar from '../components/CourseSidebar/CourseSidebar';
import TopicViewerEnhanced from '../components/TopicViewerEnhanced/TopicViewerEnhanced';
import jsModules from '../data/jsModules';
import { useApp } from '../context/AppContext';
import './HtmlLearning.css';

export default function JsLearning() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const {
    markJsTopicInProgress,
    markJsTopicComplete,
    getJsTopicStatus,
    completedJsTopics,
    jsProgress,
    TOTAL_JS_TOPICS,
    showToast,
  } = useApp();

  const currentId = parseInt(topicId) || 1;
  const topic = jsModules.find(m => m.id === currentId);

  // Mark topic as in-progress on visit
  useEffect(() => {
    if (topic) {
      markJsTopicInProgress(topic.id);
    }
  }, [topic, markJsTopicInProgress]);

  // Redirect if topic not found
  useEffect(() => {
    if (!topic) {
      navigate('/js/learn/1');
    }
  }, [topic, navigate]);

  if (!topic) return null;

  return (
    <div className="html-learning-layout">
      <CourseSidebar
        modules={jsModules}
        courseTitle="⚡ JavaScript Course"
        basePath="/js/learn"
        completedTopics={completedJsTopics}
        totalTopics={TOTAL_JS_TOPICS}
        progress={jsProgress}
        getTopicStatus={getJsTopicStatus}
      />
      <div className="html-learning-content">
        <TopicViewerEnhanced
          topic={topic}
          totalTopics={jsModules.length}
          basePath="/js/learn"
          courseIcon="⚡"
          courseLabel="JavaScript"
          markComplete={markJsTopicComplete}
          markInProgress={markJsTopicInProgress}
          getStatus={getJsTopicStatus}
          showToast={showToast}
        />
      </div>
    </div>
  );
}
