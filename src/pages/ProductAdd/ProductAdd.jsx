import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function ProductAdd() {
  const initialValues = { title: "", price: 10 };
  const schema = Yup.object({
    title: Yup.string().required("Mandatory"),
    price: Yup.number().required("Mandotory"),
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto">
          <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{console.log(values)}}> 
            <Form>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Title
                </span>
                <Field
                  name="title"
                  placeholder="Product Title"
                  className="form-control"
                ></Field>
                <ErrorMessage name="title" render={error=>
                    <label content="error"></label>
                }>
                </ErrorMessage>
              </div>

              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Price
                </span>
                <Field
                  name="price"
                  placeholder="Product Price"
                  className="form-control"
                ></Field>
                <ErrorMessage name="price" render={error=>
                    <label content="error"></label>
                }>
                </ErrorMessage>
              </div>
        

              <div>
                <button className="btn btn-primary" type="submit">Add</button>
              </div>

            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ProductAdd;
