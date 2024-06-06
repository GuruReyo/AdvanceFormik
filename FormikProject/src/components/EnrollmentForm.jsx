import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";
function EnrollmentForm() {
  const dropDownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];
  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skillset: [],
    courseDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    skillset: Yup.array()
      .min(1, "Minimum 1 to be checked")
      .required("Required"),
    courseDate: Yup.string().required("Required")   ,
  });
  const onSubmit = (values) => {
    console.log("Form Data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik.values)
        return (
          <Form>
            <FormControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormControl control="textarea" type="text" label="Bio" name="bio" />
            <FormControl
              control="select"
              options={dropDownOptions}
              label="Course"
              name="course"
            />
            <FormControl
              control="checkbox"
              label="Skillset"
              name="skillset"
              options={checkboxOptions}
            />
            <FormControl control="date" label='Course Date' name='courseDate' />
          
            <button type="submit" disabled={!formik.isValid }>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EnrollmentForm;
