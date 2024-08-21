import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Store } from "./pages/Store"
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
