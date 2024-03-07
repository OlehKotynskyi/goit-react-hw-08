import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import * as Yup from 'yup';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

const registerSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string().min(5, 'Too Short!').required('Required'),
});

const LoginForm = () => {
   const dispatch = useDispatch();
   const [password, setPassword] = useState('');

   const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
         logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
         })
      )
         .unwrap()
         .then(() => {
            toast.success('Welcome!');
         })
         .catch(() => {
            toast.error('User not found!');
         });
      form.reset();
   };

   return (
      <Formik
         initialValues={{
            email: '',
            password: '',
         }}
         validationSchema={registerSchema}
      >
         <Form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
               <Field type="email" name="email" className={css.input} placeholder="Email" />
               <ErrorMessage className={css.error} name="email" component="span" />
            </label>
            <label className={css.label}>
               <Field
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className={css.input}
                  placeholder="Password"
               />
               <ErrorMessage className={css.error} name="password" component="span" />
            </label>
            <button type="submit" className={css.button}>
               Log In
            </button>
         </Form>
      </Formik>
   );
};

export default LoginForm;
