import { Field, Form, Formik } from "formik";
import React from "react";
import "../../Components/Navbar/Style/LandMark.css";

const LandMark = ({ areaselect }) => {
  const initialValues = {
    name: "",
  };
  return (
    <>
      {areaselect && (
        <Formik initialValues={initialValues}>
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="(Road, Landmark,House etc.)"
              className="LandMark-Text-Field"
            />
          </Form>
        </Formik>
      )}
    </>
  );
};

export default LandMark;
