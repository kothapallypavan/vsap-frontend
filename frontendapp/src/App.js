import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
