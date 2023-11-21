import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Slider from "./Slider/Slider";
import Testimonials from "./components/Testmonials/Testimonials";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Slider />} /> */}
        {/* <Route path="/" element={<Testimonials />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
