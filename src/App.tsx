import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import { ArticlePage } from './components/ArticlePage';

function App() {
  return (
    <Router basename="/lever-landingpage">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
