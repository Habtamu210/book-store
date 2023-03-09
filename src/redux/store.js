import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categoriesSlice from './catagories/catagorieSlice';

const store = configureStore({
  reducer: {
    books: bookSlice,
    categories: categoriesSlice,
  },
});

export default store;
