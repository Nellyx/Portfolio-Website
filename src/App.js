import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contactbar from "./pages/contactbar/Contactbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        <Route exact path='/contactbar' element={<Contactbar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
