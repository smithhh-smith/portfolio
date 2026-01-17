import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import { AboutMe } from './components/AboutMe';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import './components/Responsive.css';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function AppLayout() {
  const { pathname } = useLocation();

  const isAboutPage = pathname === "/about-me";

  return (
    <div
      className={`container ${isAboutPage ? "about-me-bg" : "not-about-me-bg"
        }`}
    >
      <Nav />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Navigate to="/about-me" replace />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;