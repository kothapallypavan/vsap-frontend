import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Loanform from './components/loanform';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/loanform" element={<Loanform/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
