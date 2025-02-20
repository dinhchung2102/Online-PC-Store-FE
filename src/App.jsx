
import { BrowserRouter as Router, Routes, Route} from "react-router";
import Home from './pages/Home'
import About from "./pages/About"
import Configuration_Design from "./pages/Configuration_Design";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/configuration-design" element={<Configuration_Design />} />
      </Routes>
    </Router>
  )
}

export default App
