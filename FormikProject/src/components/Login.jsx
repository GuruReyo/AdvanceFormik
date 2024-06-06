import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";
function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Required'),
    password: Yup.string()
      .min(6, "Minimum 6 charachters required")
      .required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form>
            <FormControl
              // control="input"
              control="chakrainput"
              type="email"
              label="Email"
              name="email"
              
            />
            <FormControl
              // control="input"
              control='chakrainput'
              type="password"
              label="Password"
              name="password"
            />
            
            <button type="submit" disabled={!formik.isValid}>Login</button>
          </Form>
        )
      }}
    </Formik>
  );
}

export default Login;
