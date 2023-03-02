import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";
import { useNavigate, useParams } from "react-router-dom";

export function EditBook() {
  const { bookid } = useParams();

  // const book = bookList[bookid];
  // console.log(bookList, book);

  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((bk) => setBook(bk));
  }, []); // called only once

  return book ? <EditBookForm book={book} /> : "Loading...";
}

function EditBookForm({ book }) {
  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState(book.poster);
  const [rating, setRating] = useState(book.rating);
  const [summary, setSummary] = useState(book.summary);
  const [trailer, setTrailer] = useState(book.trailer);

  const navigate = useNavigate();

  return (
    <div className="add-book-form">
      <TextField
        value={name}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        value={poster}
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={rating}
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={summary}
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={trailer}
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)}
      />
      <Button
        color="success"
        variant="contained" // copy the bookList and add newBook to it
        onClick={() => {
          const newBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          // 1. POST method ✅
          // 2. where will you give the data - body - data - JSON -> object => JSON ✅
          // 3. Headers - we are passing only JSON data

          fetch(`${API}/books`, {
            method: "POST",
            body: JSON.stringify(newBook),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/books"));
          //currently post and navigate is immediate
          //when post is complete ->  navigate("/books");
        }}
      >
        SAVE
      </Button>
    </div>
  );
}
