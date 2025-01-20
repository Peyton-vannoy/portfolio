import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <Hero />
      {/* Projects Section */}
      <Project />
      {/* About Section */}
      <About />
      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
