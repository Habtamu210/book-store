import { Routes, Route } from 'react-router-dom';
import './App.css';
import BookContainer from './components/bookContainer';
import NavBar from './components/navBar';
import Categories from './pages/catgories';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
