import Experience from "./components/About";
//import About from "./components/About";
import Certificates from "./components/Contact";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Work />
      <Certificates />
      <Footer/>
    </div>
  );
}

export default App;