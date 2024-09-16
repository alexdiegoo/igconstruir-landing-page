import Header from "./components/Header";
import Container from "./components/Container";

import Home from "./sections/Home";
import Services from "./sections/Services";
import About from "./sections/About";
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
      </Container>
    </div>
  )
}

export default App
