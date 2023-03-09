import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/bookSlice';
import categoriesReducer from './catagories/catagorieSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesReducer,
    // Add other slices here if needed
  },
});

export default store;
