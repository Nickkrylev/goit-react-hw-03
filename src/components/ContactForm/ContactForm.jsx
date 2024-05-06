import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from "react";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: ""
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters"),
  number: Yup.string()
    .required("Phone number is required")
    .min(3, "Phone number must be at least 3 characters")
    .max(50, "Phone number must be at most 50 characters"),
});

function ContactForm({ addNewContact }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    addNewContact(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label htmlFor={phoneFieldId}>Phone</label>
        <Field type="text" name="number" id={phoneFieldId} />
        <ErrorMessage name="number" component="div" className={css.error} />

        <button type="submit">Add new contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
