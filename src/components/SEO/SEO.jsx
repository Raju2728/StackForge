/**
 * SEO.jsx
 * Dynamic SEO and structured metadata manager component for React SPAs.
 * Dynamically updates document title, meta descriptions, canonical link,
 * OpenGraph tags, Twitter cards, and Schema.org JSON-LD structured data.
 */
import { useEffect } from 'react';

const DEFAULT_TITLE = 'StackForge — Become a Frontend Developer From Zero to Building Real Websites';
const DEFAULT_DESC = 'Learn HTML, CSS, JavaScript and React with simple explanations, real-world analogies, interactive code playground, guided practice, quizzes, and interview preparation.';
const BASE_URL = 'https://stack-forge-bice.vercel.app';

export default function SEO({
  title,
  description = DEFAULT_DESC,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = `${BASE_URL}/og-image.svg`,
  schema,
}) {
  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title
      ? (title.includes('StackForge') ? title : `${title} | StackForge`)
      : DEFAULT_TITLE;
    document.title = formattedTitle;

    // Helper to create or update meta tag
    const setMeta = (selector, attributeName, attributeVal, content) => {
      if (!content) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attributeName, attributeVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('meta[name="description"]', 'name', 'description', description);
    if (keywords) {
      setMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    // 3. Canonical Link
    const fullCanonical = canonical
      ? (canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`)
      : `${BASE_URL}${window.location.pathname}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // 4. Open Graph Tags
    setMeta('meta[property="og:title"]', 'property', 'og:title', formattedTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', fullCanonical);
    setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);

    // 5. Twitter Card Tags
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', formattedTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Data
    const existingSchemaScript = document.getElementById('dynamic-seo-schema');
    if (schema) {
      const script = existingSchemaScript || document.createElement('script');
      script.id = 'dynamic-seo-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      if (!existingSchemaScript) {
        document.head.appendChild(script);
      }
    } else if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    return () => {
      // Clean up dynamic schema when leaving the page
      const s = document.getElementById('dynamic-seo-schema');
      if (s) s.remove();
    };
  }, [title, description, keywords, canonical, ogType, ogImage, schema]);

  return null;
}
