import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const contactSchema = Yup.object().shape({
   name: Yup.string().min(3, 'Too Short!').max(30, 'Too Long!').required('Required'),
   number: Yup.string().min(9, 'Too Short!').max(20, 'Too Long!').required('Required'),
});

const ContactForm = () => {
   const nameFieldId = useId();
   const numberFieldId = useId();
   const dispatch = useDispatch();

   const handleSubmit = (values, actions) => {
      const { name, number } = values;
      const isValid = contactSchema.isValidSync(values);
      if (!isValid) {
         toast.error('Please fill in all required fields correctly.');
         return;
      }

      dispatch(addContact({ id: nanoid(), name, number }))
         .unwrap()
         .then(() => {
            actions.resetForm();
            toast.success('Contact added successfully', { id: 'contact-added' });
         })
         .catch(error => {
            if (error.response && error.response.status === 404) {
               toast.error('Error: Invalid URL. Please try again.');
            } else {
               toast.error('Invalid data. Please check your input and try again.');
            }
         });
   };

   return (
      <Formik
         initialValues={{
            name: '',
            number: '',
         }}
         onSubmit={handleSubmit}
      >
         <Form className={css.form} autoComplete="off">
            <div className={css.wrap}>
               <label htmlFor={nameFieldId} className={css.label}>
                  Name
               </label>
               <Field type="text" name="name" id={nameFieldId} className={css.input} />
               <ErrorMessage className={css.errorMessage} name="name" component="span" />
            </div>
            <div className={css.wrap}>
               <label htmlFor={numberFieldId} className={css.label}>
                  Number
               </label>
               <Field
                  type="tel"
                  name="number"
                  id={numberFieldId}
                  className={css.input}
                  placeholder={+380694682517}
               />
               <ErrorMessage className={css.errorMessage} name="number" component="span" />
            </div>
            <button type="submit" className={css.button}>
               Add contact
            </button>
         </Form>
      </Formik>
   );
};

export default ContactForm;
