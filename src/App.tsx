import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import Landingpage from './components/Landingpage';
import { ArticlePage } from './components/ArticlePage';

function App() {
  return (
    <>
      <GoogleAnalytics />
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/articles/knowledge-graphs" element={<ArticlePage articleId="knowledge-graphs" />} />
          <Route path="/articles/apr-vs-apy" element={<ArticlePage articleId="apr-vs-apy" />} />
          {/* Redirect any other article paths to home */}
          <Route path="/articles/*" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
