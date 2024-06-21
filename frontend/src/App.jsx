import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from '../../frontend/src/components/Home';
import ArticleDetail from '../../frontend/src/components/ArticleDetail';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
