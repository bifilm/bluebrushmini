import "./App.css";
import Cylinder from "./components/Cylinder";
import Snake from "./components/Snake";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const padding = {
    padding: 5,
  };
  return (
    <Router>
      <div>
        <Link style={padding} to="/cylinder">
          cylinder
        </Link>
        <Link style={padding} to="/snake">
          snake
        </Link>
      </div>
      <Routes>
        <Route path="/cylinder" element={<Cylinder />} />
        <Route path="/snake" element={<Snake />} />
      </Routes>
    </Router>
  );
}

export default App;
