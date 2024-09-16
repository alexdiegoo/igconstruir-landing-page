import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

import Home from "./sections/Home";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";


import ServiceCheckList from "./components/ServiceChecklist";


function App() {
  return (
    <div className="w-screen">
      <Container>
        <Header />
        <Home />
        <Services />
      </ Container>
      <ServiceCheckList />
      <Container>
        <About />
        <Contact />
      </Container>
      <Footer />
    </div>
  )
}

export default App
