
import './App.css';
import HomeScreen from './Component/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductScreen from './Component/ProductScreen';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/product/:id' element={<ProductScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
