import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Book } from "./Book";
import { API } from "./global";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
export function BookList() {
  const [bookList, setBookList] = useState([]);

  const getBooks = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((bks) => setBookList(bks));
  };

  useEffect(() => getBooks(), []); // called only once
  const navigate = useNavigate();
  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book
            key={bk.id}
            book={bk}
            id={bk.id}
            deleteButton={
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  fetch(`${API}/books/${bk.id}`, {
                    method: "DELETE",
                  }).then(() => getBooks());
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="edit"
                color="secondary"
                onClick={() => navigate(`/books/edit/${bk.id}`)}
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
