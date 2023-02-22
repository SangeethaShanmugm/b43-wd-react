import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import { useState } from "react";
import bookdata from "./data.json";
import { AddColor } from "./AddColor";
import { Home } from "./Home";
import { UserList } from "./UserList";

console.log(bookdata);

console.log(bookdata[2].summary);

const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of Link livestock pig named Wilbur and his friendship with Link barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://imgv2-1-f.scribdassets.com/img/word_document/506884166/original/216x287/f39dce63c4/1666992162?v=1",
    rating: 7,
    summary:
      "Your subconscious mind is Link powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, Link mental position with regard to Link fact or state. Attitudes reflect Link tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses Link person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is Link story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses Link fictitious story about Link billionaire mentor teaching Link struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is Link stream of affirmations.",
  },
];

export default function App() {
  //JS starts

  //JS Ends
  //JSX starts
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* Link change page without refresh */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
          <li>
            <Link to="/add-color">AddColor</Link>
          </li>
          <li>
            <Link to="/user-profile">UserList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/add-color" element={<AddColor />} />
        <Route path="/user-profile" element={<UserList />} />
      </Routes>
    </div>
  );
  //JSX Ends
}

function BookList() {
  const bookList = INITIAL_BOOK_LIST;
  return (
    <div className="book-list">
      {bookList.map((bk, index) => (
        <Book key={index} book={bk} id={index} />
      ))}
    </div>
  );
}

function Book({ book, id }) {
  // const book = {
  //   name: "The Secret",
  //   rating: 8,
  //   poster:
  //     "http://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781582701707/the-secret-9781582701707_lg.jpg",
  //   summary:
  //     "The Secret is Link self-help book by Rhonda Byrne that explains how the law of attraction, which states that positive energy attracts positive things into your life, governs your thinking and actions, and how you can use the power of positive thinking to achieve anything you can imagine",
  // };

  const [show, setShow] = useState(true);
  //true = visible
  //false -hidden
  const styles = {
    color: book.rating > 8 ? "green" : "red",
  };

  const summaryStyle = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-name">
          {book.name} - {id}
        </h2>
        <p style={styles} className="book-rating">
          ⭐{book.rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle description</button>
      {/* /books/0 or /books/1 */}
      <button onClick={() => navigate("/books/" + id)}>Info</button>
      {/* <p style={summaryStyle} className="book-summary">
        {book.summary}
      </p> */}
      {/* conditional rendering */}
      {show ? <p className="book-summary">{book.summary}</p> : null}
      <Counter />
    </div>
  );
}
