
import { BrowserRouter as Router, Routes, Route} from "react-router";
import Home from './pages/Home'
import About from "./pages/About"
import Configuration_Design from "./pages/Configuration_Design";
import Mouse_all from "./pages/Mouse_all";
import Shopping_Cart from "./pages/Shopping_Cart";

import Detail_Account from "./pages/Detail_Account";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/configuration-design" element={<Configuration_Design />} />
        <Route path="/mouse-all" element={<Mouse_all />} />
        <Route path="/shopping-cart" element={<Shopping_Cart />} />

        <Route path="/Detail_Account" element={<Detail_Account />} />

      </Routes>
    </Router>
  )
}

export default App
