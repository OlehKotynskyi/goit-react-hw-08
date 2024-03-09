import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import * as Yup from 'yup';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

const loginSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string().min(5, 'Too Short!').required('Required'),
});

const LoginForm = () => {
   const dispatch = useDispatch();
   const [errorMessage, setErrorMessage] = useState('');

   const handleSubmit = (values, actions) => {
      dispatch(logIn(values))
         .unwrap()
         .then(() => {
            toast.success('Welcome!');
         })
         .catch(() => {
            setErrorMessage('User not found!');
            toast.error('User not found!');
         })
         .finally(() => {
            actions.setSubmitting(false);
         });
   };

   return (
      <Formik
         initialValues={{
            email: '',
            password: '',
         }}
         validationSchema={loginSchema}
         onSubmit={handleSubmit}
      >
         {({ isSubmitting }) => (
            <Form className={css.form} autoComplete="off">
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
                  Log In
               </button>
            </Form>
         )}
      </Formik>
   );
};

export default LoginForm;
