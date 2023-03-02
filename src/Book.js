import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export function Book({ book, id, deleteButton, editButton }) {
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
      <IconButton
        aria-label="toggle-description"
        color="primary"
        onClick={() => setShow(!show)}
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      {/* <button onClick={() => setShow(!show)}>Toggle description</button> */}
      {/* /books/0 or /books/1 */}
      <IconButton
        aria-label="info"
        color="primary"
        onClick={() => navigate(`/books/${id}`)}
      >
        <InfoIcon />
      </IconButton>
      {/* <Button onClick={() => navigate("/books/" + id)}>Info</Button> */}
      {/* <p style={summaryStyle} className="book-summary">
              {book.summary}
            </p> */}
      {/* conditional rendering */}
      {show ? <p className="book-summary">{book.summary}</p> : null}
      <Counter />
      {deleteButton} {editButton}
    </div>
  );
}
