import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import { ArticlePage } from './components/ArticlePage';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
