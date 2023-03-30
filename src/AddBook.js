import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

//name - required
//poster - min 4, required
//rating - 1- 10, required
// summary -  min 20, required
// trailer -  min 10, required

const BookValidationSchema = yup.object({
  name: yup.string().required("Why not fill the name"),
  poster: yup
    .string()
    .min(4, "Need a longer poster")
    .required("Why not fill the poster"),
  rating: yup
    .number()
    .min(1, "Need a longer rating")
    .max(10, "Too much rating🥳")
    .required("Why not fill the rating🥳"),
  summary: yup
    .string()
    .min(20, "Need a longer summary")
    .required("Why not fill the summary"),
  trailer: yup
    .string()
    .min(10, "Need a longer trailer")
    .required("Why not fill the trailer"),
});

export function AddBook() {
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: BookValidationSchema,
    onSubmit: (newBook) => {
      console.log("onSubmit values:", newBook);
      createBook(newBook);
    },
  });

  const navigate = useNavigate();

  const createBook = (newBook) => {
    console.log("createBook", newBook);
    fetch(`${API}/books`, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((data) => data.json())
      .then(() => navigate("/books"));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="add-book-form">
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        error
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={"Nice"}
      />
      {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
      <TextField
        id="poster"
        name="poster"
        label="Poster"
        error
        helperText={"Nice"}
        variant="outlined"
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}
      <TextField
        id="rating"
        name="rating"
        label="Rating"
        variant="outlined"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}
      <TextField
        id="summary"
        name="summary"
        label="Summary"
        variant="outlined"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.summary && formik.errors.summary
        ? formik.errors.summary
        : ""}
      <TextField
        id="trailer"
        name="trailer"
        label="Trailer"
        variant="outlined"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.trailer && formik.errors.trailer
        ? formik.errors.trailer
        : ""}
      <Button type="submit" variant="contained" onClick={createBook}>
        Add Book
      </Button>

      {/* <Button
        variant="contained" // copy the bookList and add newBook to it
        onClick={() => {
          const newBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          1. POST method ✅
          2. where will you give the data - body - data - JSON -> object => JSON ✅
          3. Headers - we are passing only JSON data

          fetch(`${API}/books`, {
            method: "POST",
             body: JSON.stringify(newBook),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/books"));
          currently post and navigate is immediate
          when post is complete ->  navigate("/books");
        }}
      >
        Add Book
      </Button> */}
    </form>
  );
}
