import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Books from './components/books';
import Categories from './components/catagories';
import Navbar from './components/navBar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/books" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;