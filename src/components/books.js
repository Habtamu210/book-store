import { useSelector } from 'react-redux';
import Book from './book';
import Form from './bookForm';
import styles from './styles/books.css';

const Books = () => {
  const { bookList } = useSelector((state) => state.books);
  return (
    <section className={styles.books}>
      {
        bookList.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))
        }
      <Form />
    </section>
  );
};

export default Books;
