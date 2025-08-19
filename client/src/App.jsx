import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import Projects from './pages/Projects'; 

export default function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <section id="home">
                <Home />
              </section>
              <section id="about"></section>
              <About/>
              <section id="projects">
                <Projects/>
              </section>
              <section id="contact">
                <Contact/>
              </section>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
