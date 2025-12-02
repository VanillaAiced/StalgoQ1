import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Location from './components/Location';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Location />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <HomePage />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
