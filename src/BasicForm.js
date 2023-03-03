import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Need a longer email🥳")
    .required("Why not fill the email😉")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter Valid email"),
  password: yup
    .string()
    .min(8, "Need a longer password")
    .max(12, "Too much password")
    .required("Why not fill the password😉")
    .matches(
      /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&]).{8,}$/,
      "Enter Valid password"
    ),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit values:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Basic Form</h1>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br />
      <input
        id="password"
        name="password"
        type="text"
        placeholder="Enter Password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
