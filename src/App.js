import './App.css';
import Calculator from './Calculator';
import Home from './Home';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Quote from './Quote';
// import Home from './Home';
// import Quote from './Quote';

function App() {
  return (
    <>
      {' '}
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />

        <Route path='/Quote' element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;

<Routes></Routes>;
