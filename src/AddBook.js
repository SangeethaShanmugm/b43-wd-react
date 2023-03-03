import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";

export function AddBook() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <div className="add-book-form">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          onChange={(event) => setPoster(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          onChange={(event) => setRating(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          onChange={(event) => setSummary(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Trailer"
          variant="outlined"
          onChange={(event) => setTrailer(event.target.value)}
        />

        <Button
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
          Add Book
        </Button>
      </div>
    </div>
  );
}
