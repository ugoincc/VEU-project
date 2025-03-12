import "./App.css";
import NavBar from "./componentes/NavBar";
import Content from "./layout/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Content />
    </Router>
  );
}

export default App;
