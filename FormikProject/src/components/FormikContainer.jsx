import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";
const FormikContainer = () => {
  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "Option 1", value: "roption1" },
    { key: "Option 2", value: "roption2" },
    { key: "Option 3", value: "roption3" },
  ];
  const checkBoxOptions = [
    { key: "Option 1", value: "coption1" },
    { key: "Option 2", value: "coption2" },
    { key: "Option 3", value: "coption3" },
  ];

  const initialValues = {
    name: "Guru",
    email: "",
    description: "",
    radioOption: "",
    checkBoxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkBoxOption: Yup.array().min(1, "Required"),
    birthDate: Yup.date().required("Required")
  });
  const onSubmit = (values) => {
    console.log("Form Data", values);
    console.log("Saved Data",JSON.parse(JSON.stringify(values)))
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log("Formik Data", formik);
        return (
          <Form>
            <FormControl name="name" label="Name" control="input" type="text" />
            <FormControl
              name="email"
              label="Email"
              control="input"
              type="email"
            />
            <FormControl
              name="description"
              label="Description"
              control="textarea"
              type="text"
            />
            <FormControl
              name="selectOption"
              label="Select a topic"
              control="select"
              options={dropDownOptions}
            />
            <FormControl
              name="radioOption"
              label="Radio Topic"
              control="radio"
              options={radioOptions}
            />
            <FormControl
              name="checkBoxOption"
              label="Check Box Topic"
              control="checkbox"
              options={checkBoxOptions}
            />

            <FormControl name="birthDate" label="Pick a Date" control="date" />

            <button
              type="submit"
              disabled={formik.isValid && formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
