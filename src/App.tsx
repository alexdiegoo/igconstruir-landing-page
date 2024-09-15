import Header from "./components/Header";
import Container from "./components/Container";

import About from "./sections/About";

function App() {
  return (
    <div className="w-3/4 mx-auto max-w-7xl">
      <Header />
      <Container>
        <About />
      </Container>
    </div>
  )
}

export default App
