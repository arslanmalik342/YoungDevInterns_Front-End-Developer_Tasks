import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles.css';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const ApiData = lazy(() => import('./components/ApiData'));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/api-data" element={<ApiData />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
