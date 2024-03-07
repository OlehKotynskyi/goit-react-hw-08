import css from './Pages.module.css';
import LoginForm from '../components/LoginForm/LoginForm';

export default function Login() {
   return (
      <div className={css.container}>
         <h2 className={css.title}>Login</h2>
         <LoginForm />
      </div>
   );
}
