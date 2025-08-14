import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <section id="home" ></section>
      <section id="about" ></section>
      <section id="contact" ></section>
      <section id="projects" ></section>
      <Home/>
      <Footer/>
    </div>
  );
}
