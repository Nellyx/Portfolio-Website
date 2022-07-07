import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contactbar from "./pages/contactbar/Contactbar";
import Myworks from "./pages/work/Myworks";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contactbar" element={<Contactbar />}></Route>
          <Route exact path="/myworks" element={<Myworks />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
