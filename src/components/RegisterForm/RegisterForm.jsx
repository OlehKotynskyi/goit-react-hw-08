import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';

const registerSchema = Yup.object().shape({
   name: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string().min(5, 'Too Short!').required('Required'),
});

const RegisterForm = () => {
   const dispatch = useDispatch();
   const [errorMessage, setErrorMessage] = useState('');

   const handleSubmit = (values, actions) => {
      dispatch(register(values))
         .unwrap()
         .then(() => {
            toast.success('Registered!');
         })
         .catch(() => {
            setErrorMessage('Fill in the fields!');
         })
         .finally(() => {
            actions.setSubmitting(false);
         });
   };

   return (
      <Formik
         initialValues={{
            name: '',
            email: '',
            password: '',
         }}
         validationSchema={registerSchema}
         onSubmit={handleSubmit}
      >
         {({ isSubmitting }) => (
            <Form className={css.form} autoComplete="off">
               <label className={css.label}>
                  <Field type="text" name="name" className={css.input} placeholder="Username" />
                  <ErrorMessage className={css.error} name="name" component="span" />
               </label>
               <label className={css.label}>
                  <Field type="email" name="email" className={css.input} placeholder="Email" />
                  <ErrorMessage className={css.error} name="email" component="span" />
               </label>
               <label className={css.label}>
                  <Field
                     type="password"
                     name="password"
                     autoComplete="current-password"
                     className={css.input}
                     placeholder="Password"
                  />
                  <ErrorMessage className={css.error} name="password" component="span" />
               </label>
               {errorMessage && <span className={css.error}>{errorMessage}</span>}
               <button type="submit" className={css.button} disabled={isSubmitting}>
                  Registration
               </button>
            </Form>
         )}
      </Formik>
   );
};

export default RegisterForm;
