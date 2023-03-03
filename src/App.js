import { Route, Link, Routes } from 'react-router-dom';
import Books from './components/book';
import Catagories from './components/catgories';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <h1>
          Bookstore Maya
        </h1>
        <ul>
          <li>
            <Link to="/"> Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Catagories />} />
      </Routes>
    </>
  );
}

export default App;
