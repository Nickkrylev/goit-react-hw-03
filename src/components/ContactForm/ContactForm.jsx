import { Formik,Form,Field } from 'formik';
import { useId } from "react";
import css from "./ContactForm.module.css"
const initialValues = {
  name: "",
  number: ""
};
function ContactForm({addNewContact}) {

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    addNewContact(values)
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="name" id={nameFieldId} />

        <label htmlFor={phoneFieldId}>Phone</label>
        <Field type="phone" name="number" id={phoneFieldId} />

        <button type="submit">Add new contact</button>
      </Form>
    </Formik>
  );
  }
  
  export default ContactForm;


