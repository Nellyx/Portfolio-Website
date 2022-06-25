import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
