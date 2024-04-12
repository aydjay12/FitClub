import "./App.scss";
import Footer from "./components/Footer/Footer";
import Home from "./components/Hero/Hero.jsx";
import Plans from "./components/Plans/Plans.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Testimonials from "./components/Testimonials/Testimonials";
import Why_Us from "./components/Why_Us/Why_Us.jsx";

function App() {
  return (
    <div className="App">
      <section id="Home">
        <Home></Home>
      </section>
      <section id="Programs">
        <Programs></Programs>
      </section>
      <section id="Why Us">
        <Why_Us></Why_Us>
      </section>
      <section id="Plans">
        <Plans></Plans>
      </section>
      <section id="Testimonials">
        <Testimonials></Testimonials>
      </section>
      <section id="Footer">
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
