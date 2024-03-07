import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useId } from 'react';
import { nanoid } from 'nanoid';

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

   return (
      <Formik
         initialValues={{
            name: '',
            number: '',
         }}
         validationSchema={contactSchema}
         onSubmit={(values, actions) => {
            console.log(values);
            dispatch(addContact({ id: nanoid(), ...values }));
            actions.resetForm();
         }}
      >
         <Form className={css.form} autoComplete="off">
            <div>
               <label htmlFor={nameFieldId} className={css.label}>
                  Name
               </label>
               <Field type="text" name="name" id={nameFieldId} className={css.input} />
               <ErrorMessage className={css.error} name="name" component="span" />
            </div>
            <div>
               <label htmlFor={numberFieldId} className={css.label}>
                  Number
               </label>
               <Field
                  type="tel"
                  name="number"
                  id={numberFieldId}
                  className={css.input}
                  placeholder={+380994585577}
               />
               <ErrorMessage className={css.error} name="number" component="span" />
            </div>
            <button type="submit" className={css.button}>
               Add contact
            </button>
         </Form>
      </Formik>
   );
};

export default ContactForm;
