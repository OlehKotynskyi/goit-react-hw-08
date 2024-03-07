import css from './Pages.module.css';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function Register() {
   return (
      <div className={css.container}>
         <h2 className={css.title}>Registration</h2>
         <RegisterForm />
      </div>
   );
}
