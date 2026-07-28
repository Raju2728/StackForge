/**
 * AppContext.jsx
 * Central state management for StackLearner.
 * Manages: theme, progress (HTML/CSS/JS), sidebar state, and localStorage persistence.
 */
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AppContext = createContext(null);

// Keys used in localStorage
const STORAGE_KEYS = {
  THEME: 'stacklearner_theme',
  COMPLETED_TOPICS: 'stacklearner_completed_topics',
  COMPLETED_PRACTICE: 'stacklearner_completed_practice',
  FINAL_PROJECT: 'stacklearner_final_project',
  CURRENT_TOPIC: 'stacklearner_current_topic',
  IN_PROGRESS_TOPICS: 'stacklearner_in_progress',
  // CSS
  COMPLETED_CSS_TOPICS: 'stacklearner_completed_css_topics',
  IN_PROGRESS_CSS_TOPICS: 'stacklearner_in_progress_css',
  // JS
  COMPLETED_JS_TOPICS: 'stacklearner_completed_js_topics',
  IN_PROGRESS_JS_TOPICS: 'stacklearner_in_progress_js',
};

const TOTAL_HTML_TOPICS = 22;
const TOTAL_CSS_TOPICS = 55;
const TOTAL_JS_TOPICS = 16;
const TOTAL_PRACTICE = 10;

/**
 * Load a value from localStorage, returning a fallback if not found.
 */
function loadFromStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }) {
  // Theme
  const [theme, setTheme] = useState(() => loadFromStorage(STORAGE_KEYS.THEME, 'light'));

  // HTML - Completed topics (array of topic IDs)
  const [completedTopics, setCompletedTopics] = useState(
    () => loadFromStorage(STORAGE_KEYS.COMPLETED_TOPICS, [])
  );

  // HTML - In-progress topics (array of topic IDs)
  const [inProgressTopics, setInProgressTopics] = useState(
    () => loadFromStorage(STORAGE_KEYS.IN_PROGRESS_TOPICS, [])
  );

  // CSS - Completed topics
  const [completedCssTopics, setCompletedCssTopics] = useState(
    () => loadFromStorage(STORAGE_KEYS.COMPLETED_CSS_TOPICS, [])
  );

  // CSS - In-progress topics
  const [inProgressCssTopics, setInProgressCssTopics] = useState(
    () => loadFromStorage(STORAGE_KEYS.IN_PROGRESS_CSS_TOPICS, [])
  );

  // JS - Completed topics
  const [completedJsTopics, setCompletedJsTopics] = useState(
    () => loadFromStorage(STORAGE_KEYS.COMPLETED_JS_TOPICS, [])
  );

  // JS - In-progress topics
  const [inProgressJsTopics, setInProgressJsTopics] = useState(
    () => loadFromStorage(STORAGE_KEYS.IN_PROGRESS_JS_TOPICS, [])
  );

  // Completed practice tasks (array of task IDs)
  const [completedPractice, setCompletedPractice] = useState(
    () => loadFromStorage(STORAGE_KEYS.COMPLETED_PRACTICE, [])
  );

  // Final project submitted
  const [finalProjectSubmitted, setFinalProjectSubmitted] = useState(
    () => loadFromStorage(STORAGE_KEYS.FINAL_PROJECT, false)
  );

  // UI state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, JSON.stringify(theme));
  }, [theme]);

  // Persist HTML progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(completedTopics));
  }, [completedTopics]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.IN_PROGRESS_TOPICS, JSON.stringify(inProgressTopics));
  }, [inProgressTopics]);

  // Persist CSS progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_CSS_TOPICS, JSON.stringify(completedCssTopics));
  }, [completedCssTopics]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.IN_PROGRESS_CSS_TOPICS, JSON.stringify(inProgressCssTopics));
  }, [inProgressCssTopics]);

  // Persist JS progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_JS_TOPICS, JSON.stringify(completedJsTopics));
  }, [completedJsTopics]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.IN_PROGRESS_JS_TOPICS, JSON.stringify(inProgressJsTopics));
  }, [inProgressJsTopics]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_PRACTICE, JSON.stringify(completedPractice));
  }, [completedPractice]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FINAL_PROJECT, JSON.stringify(finalProjectSubmitted));
  }, [finalProjectSubmitted]);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // --- Actions ---
  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  // HTML actions
  const markTopicComplete = useCallback((topicId) => {
    setCompletedTopics(prev => {
      if (prev.includes(topicId)) return prev;
      return [...prev, topicId];
    });
    setInProgressTopics(prev => prev.filter(id => id !== topicId));
  }, []);

  const markTopicInProgress = useCallback((topicId) => {
    setInProgressTopics(prev => {
      if (prev.includes(topicId)) return prev;
      return [...prev, topicId];
    });
  }, []);

  // CSS actions
  const markCssTopicComplete = useCallback((topicId) => {
    setCompletedCssTopics(prev => {
      if (prev.includes(topicId)) return prev;
      return [...prev, topicId];
    });
    setInProgressCssTopics(prev => prev.filter(id => id !== topicId));
  }, []);

  const markCssTopicInProgress = useCallback((topicId) => {
    setInProgressCssTopics(prev => {
      if (prev.includes(topicId)) return prev;
      return [...prev, topicId];
    });
  }, []);

  // JS actions
  const markJsTopicComplete = useCallback((topicId) => {
    setCompletedJsTopics(prev => {
      if (prev.includes(topicId)) return prev;
      return [...prev, topicId];
    });
    setInProgressJsTopics(prev => prev.filter(id => id !== topicId));
  }, []);

  const markJsTopicInProgress = useCallback((topicId) => {
    setInProgressJsTopics(prev => {
      if (prev.includes(topicId)) return prev;
      return [...prev, topicId];
    });
  }, []);

  const markPracticeComplete = useCallback((taskId) => {
    setCompletedPractice(prev => {
      if (prev.includes(taskId)) return prev;
      return [...prev, taskId];
    });
  }, []);

  const submitFinalProject = useCallback(() => {
    setFinalProjectSubmitted(true);
  }, []);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
  }, []);

  // --- Derived state ---
  const getTopicStatus = useCallback((topicId) => {
    if (completedTopics.includes(topicId)) return 'completed';
    if (inProgressTopics.includes(topicId)) return 'in-progress';
    return 'not-started';
  }, [completedTopics, inProgressTopics]);

  const getCssTopicStatus = useCallback((topicId) => {
    if (completedCssTopics.includes(topicId)) return 'completed';
    if (inProgressCssTopics.includes(topicId)) return 'in-progress';
    return 'not-started';
  }, [completedCssTopics, inProgressCssTopics]);

  const getJsTopicStatus = useCallback((topicId) => {
    if (completedJsTopics.includes(topicId)) return 'completed';
    if (inProgressJsTopics.includes(topicId)) return 'in-progress';
    return 'not-started';
  }, [completedJsTopics, inProgressJsTopics]);

  const htmlProgress = Math.round(
    (completedTopics.length / TOTAL_HTML_TOPICS) * 100
  );

  const cssProgress = Math.round(
    (completedCssTopics.length / TOTAL_CSS_TOPICS) * 100
  );

  const jsProgress = Math.round(
    (completedJsTopics.length / TOTAL_JS_TOPICS) * 100
  );

  const practiceProgress = Math.round(
    (completedPractice.length / TOTAL_PRACTICE) * 100
  );

  const isHtmlComplete =
    completedTopics.length >= TOTAL_HTML_TOPICS &&
    completedPractice.length >= TOTAL_PRACTICE &&
    finalProjectSubmitted;

  // CSS and JavaScript modules are freely accessible
  const isCssUnlocked = true;
  const isJsUnlocked = true;

  // Overall platform progress
  const totalAllTopics = TOTAL_HTML_TOPICS + TOTAL_CSS_TOPICS + TOTAL_JS_TOPICS + TOTAL_PRACTICE + 1;
  const completedAll = completedTopics.length + completedCssTopics.length + completedJsTopics.length + completedPractice.length + (finalProjectSubmitted ? 1 : 0);
  const overallPlatformProgress = Math.round((completedAll / totalAllTopics) * 100);

  const resetProgress = useCallback(() => {
    setCompletedTopics([]);
    setInProgressTopics([]);
    setCompletedCssTopics([]);
    setInProgressCssTopics([]);
    setCompletedJsTopics([]);
    setInProgressJsTopics([]);
    setCompletedPractice([]);
    setFinalProjectSubmitted(false);
  }, []);

  const value = {
    // Theme
    theme,
    toggleTheme,

    // HTML Progress
    completedTopics,
    inProgressTopics,
    htmlProgress,
    TOTAL_TOPICS: TOTAL_HTML_TOPICS,
    TOTAL_HTML_TOPICS,

    // CSS Progress
    completedCssTopics,
    inProgressCssTopics,
    cssProgress,
    TOTAL_CSS_TOPICS,

    // JS Progress
    completedJsTopics,
    inProgressJsTopics,
    jsProgress,
    TOTAL_JS_TOPICS,

    // Practice & Project
    completedPractice,
    finalProjectSubmitted,
    practiceProgress,
    isHtmlComplete,
    isCssUnlocked,
    isJsUnlocked,
    TOTAL_PRACTICE,
    overallPlatformProgress,

    // HTML Actions
    markTopicComplete,
    markTopicInProgress,
    getTopicStatus,

    // CSS Actions
    markCssTopicComplete,
    markCssTopicInProgress,
    getCssTopicStatus,

    // JS Actions
    markJsTopicComplete,
    markJsTopicInProgress,
    getJsTopicStatus,

    // Common Actions
    markPracticeComplete,
    submitFinalProject,
    resetProgress,

    // UI
    sidebarOpen,
    setSidebarOpen,
    toast,
    showToast,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.type === 'success' ? '✅' : '❌'} {toast.message}
        </div>
      )}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
