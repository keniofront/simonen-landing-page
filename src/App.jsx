import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Products from "./sections/Products/Products";
import Cta from "./sections/Cta/Cta";
import Values from "./sections/Values/Values";
import Cases from "./sections/Cases/Cases";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Products />
      <Cta />
      <Values />
      <Cases />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
