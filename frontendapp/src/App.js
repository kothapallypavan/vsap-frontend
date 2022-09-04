import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Loanform from './components/loanform';
import Signup from './components/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/loanform" element={<Loanform/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
