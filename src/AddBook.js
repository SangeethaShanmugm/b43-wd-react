import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddBook({ bookList, setBookList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <div className="add-book-form">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)} />
        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          onChange={(event) => setPoster(event.target.value)} />
        <TextField
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          onChange={(event) => setRating(event.target.value)} />
        <TextField
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          onChange={(event) => setSummary(event.target.value)} />

        <Button
          variant="contained" // copy the bookList and add newBook to it
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };

            setBookList([...bookList, newBook]);
            navigate("/books");
          }}
        >
          Add Book
        </Button>
      </div>
    </div>
  );
}
