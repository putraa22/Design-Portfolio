import "./App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Skill from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
