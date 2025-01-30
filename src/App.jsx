import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Project />
      <About />
      <Contact />
    </div>
  );
}

export default App;
