import InputForm from "./Components/InputForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Recipe from "./Components/Recipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputForm />}></Route>
        <Route path="/Recipe1" element={<Recipe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
