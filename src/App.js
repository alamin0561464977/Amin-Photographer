import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='bg-[#c4c4c4]'>
      <div className="App container mx-auto">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
