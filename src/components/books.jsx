import { useSelector } from 'react-redux';
import Book from './book';
import Form from './bookForm';

const Books = () => {
  // const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  return (
    <>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          category={book.category}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </>
  );
};

export default Books;
