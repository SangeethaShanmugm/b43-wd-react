import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Book } from "./Book";

export function BookList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch("https://63fd8351c639f8563141f462.mockapi.io/books", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((bks) => setBookList(bks));
  }, []); // called only once

  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={bk.id} />
        ))}
      </div>
    </div>
  );
}
