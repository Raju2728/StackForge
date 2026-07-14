/**
 * AppContext.jsx
 * Central state management for StackLearner.
 * Manages: theme, progress, sidebar state, and localStorage persistence.
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
};

const TOTAL_TOPICS = 22;
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

  // Completed topics (array of topic IDs)
  const [completedTopics, setCompletedTopics] = useState(
    () => loadFromStorage(STORAGE_KEYS.COMPLETED_TOPICS, [])
  );

  // In-progress topics (array of topic IDs)
  const [inProgressTopics, setInProgressTopics] = useState(
    () => loadFromStorage(STORAGE_KEYS.IN_PROGRESS_TOPICS, [])
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

  // Persist progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(completedTopics));
  }, [completedTopics]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.IN_PROGRESS_TOPICS, JSON.stringify(inProgressTopics));
  }, [inProgressTopics]);

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

  const markTopicComplete = useCallback((topicId) => {
    setCompletedTopics(prev => {
      if (prev.includes(topicId)) return prev;
      return [...prev, topicId];
    });
    // Remove from in-progress
    setInProgressTopics(prev => prev.filter(id => id !== topicId));
  }, []);

  const markTopicInProgress = useCallback((topicId) => {
    setInProgressTopics(prev => {
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

  const htmlProgress = Math.round(
    (completedTopics.length / TOTAL_TOPICS) * 100
  );

  const practiceProgress = Math.round(
    (completedPractice.length / TOTAL_PRACTICE) * 100
  );

  const isHtmlComplete =
    completedTopics.length >= TOTAL_TOPICS &&
    completedPractice.length >= TOTAL_PRACTICE &&
    finalProjectSubmitted;

  // CSS/JS modules only unlock after full HTML completion
  const isCssUnlocked = isHtmlComplete;
  const isJsUnlocked = isHtmlComplete;

  const resetProgress = useCallback(() => {
    setCompletedTopics([]);
    setInProgressTopics([]);
    setCompletedPractice([]);
    setFinalProjectSubmitted(false);
  }, []);

  const value = {
    // Theme
    theme,
    toggleTheme,

    // Progress
    completedTopics,
    inProgressTopics,
    completedPractice,
    finalProjectSubmitted,
    htmlProgress,
    practiceProgress,
    isHtmlComplete,
    isCssUnlocked,
    isJsUnlocked,
    TOTAL_TOPICS,
    TOTAL_PRACTICE,

    // Actions
    markTopicComplete,
    markTopicInProgress,
    markPracticeComplete,
    submitFinalProject,
    getTopicStatus,
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
