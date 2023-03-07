import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <li>
      <h2 style={{ marginBottom: 0, paddingBottom: 0 }}>
        {' '}
        {title}
        {' '}
      </h2>
      <p style={{ margin: 0, padding: 0 }}>
        {' '}
        {author}
        {' '}
      </p>
      <button type="button">Remove</button>
    </li>
  );
};

import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeBook(id));

  return (
    <li>
      <h2 style={{ marginBottom: 0, paddingBottom: 0 }}>
        {' '}
        {title}
        {' '}
      </h2>
      <p style={{ margin: 0, padding: 0 }}>
        {' '}
        {author}
        {' '}
      </p>
      <button
        type="button"
        onClick={handleRemove}
      >
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
