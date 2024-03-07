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
   const [password, setPassword] = useState('');

   const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
         register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
         })
      )
         .unwrap()
         .then(() => {
            toast.success('Registered!');
         })
         .catch(() => {
            toast.error('Fill in the fields!');
         });
      form.reset();
   };

   return (
      <Formik
         initialValues={{
            name: '',
            email: '',
            password: '',
         }}
         validationSchema={registerSchema}
      >
         <Form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
               <Field type="text" name="name" className={css.input} placeholder="Username" />
               <ErrorMessage className={css.error} name="name" component="span" />
            </label>
            <label className={css.label}>
               <Field type="email" name="email" className={css.input} placeholder="Email" />
               <ErrorMessage className={css.error} name="email" component="span" />
            </label>
            <label className={css.label}>
               <input
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
               Registration
            </button>
         </Form>
      </Formik>
   );
};

export default RegisterForm;
