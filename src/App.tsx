import Header from "./components/Header";
import Container from "./components/Container";

import Home from "./sections/Home";
import Services from "./sections/Services";
import About from "./sections/About";

function App() {
  return (
    <div className="w-3/4 mx-auto max-w-7xl">
      <Header />
      <Container>
        <Home />
        <Services />
        <About />
      </Container>
    </div>
  )
}

export default App
