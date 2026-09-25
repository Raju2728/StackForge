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
import SEO from '../components/SEO/SEO';
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

  const topicSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${topic.title} - CSS Learning Module`,
    description: topic.explanation,
    articleSection: topic.category || 'CSS',
    isPartOf: {
      '@type': 'Course',
      name: 'Modern CSS3 & Responsive Design',
      url: 'https://stack-learner.vercel.app/css/learn/1',
    },
  };

  return (
    <div className="html-learning-layout">
      <SEO
        title={`${topic.title} — CSS Course`}
        description={topic.explanation?.slice(0, 155) || `Learn ${topic.title} with interactive styling examples, analogies, and quizzes on StackForge.`}
        canonical={`/css/learn/${topic.id}`}
        keywords={`css ${topic.title.toLowerCase()}, learn css, css tutorial, css styling, web design`}
        schema={topicSchema}
      />
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
