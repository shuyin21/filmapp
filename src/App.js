import './App.css';
import Nav from './components/nav';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Directors from './components/directors';
import About from './components/about';

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path='/directors' element={<Directors />} />
          <Route path='/about' element={<About />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
