import React from 'react';
import BooksList from './bookList';
import BookForm from './bookForm';

const BookContainer = () => {
  const books = [
    {
      id: 1,
      title: 'Fiker Eskimekaber',
      author: 'Addis  Alemayehu',
    },
    {
      id: 2,
      title: 'Keye Kokebe',
      author: 'Balu Girma',
    },
    {
      id: 3,
      title: 'Sememene',
      author: 'Beweketu Seyum',
    },
  ];

  return (
    <>
      <BooksList books={books} />
      <BookForm />
    </>
  );
};

export default BookContainer;
