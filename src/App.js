import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Project from "./Conponents/Project/Project.js"
function App() {
  return (

    <Routes>
      <Route path="/" element={<Project />}>

      </Route>
    </Routes>

  );
}

export default App;
