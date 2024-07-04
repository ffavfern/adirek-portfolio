import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import EducationExperience from './components/EducationExperience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <About />
      
      <EducationExperience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
