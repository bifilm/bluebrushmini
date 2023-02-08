import "./App.css";
import Cylinder from "./components/Cylinder";
import Snake from "./components/Snake";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contour from "./components/Contour";
import Cylinder2 from "./components/Cylinder2";
import Cylinder3 from "./components/Cylinder3";
function App() {
  const padding = {
    padding: 5,
  };
  return (
    <Router>
      <div>
        <Link style={padding} to="/cylinder">
          cylinderMove
        </Link>
        <Link style={padding} to="/cylinder2">
          Cylinder2RandomY
        </Link>
        <Link style={padding} to="/cylinder3">
          Cylinder3RandomXYZ
        </Link>
        <Link style={padding} to="/snake">
          snake
        </Link>
        <Link style={padding} to="/contour">
          Contour
        </Link>
        <Link style={padding} to="https://floating-peak-47388.herokuapp.com/">
          To accuracy checker
        </Link>
      </div>
      <Routes>
        <Route path="/cylinder" element={<Cylinder />} />
        <Route path="/cylinder2" element={<Cylinder2 />} />
        <Route path="/cylinder3" element={<Cylinder3 />} />
        <Route path="/snake" element={<Snake />} />
        {/* <Route path="/contour" element={<Contour />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
