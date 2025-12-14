import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';  // Add this import
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      {/* Next: Skills, Projects, etc. */}
    </>
  );
}

export default App;