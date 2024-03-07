import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
   const dispatch = useDispatch();
   const { user } = useAuth();

   return (
      <div className={css.wrapper}>
         <div>
            <p>Welcome,</p>
            <p>{user.name}</p>
         </div>
         <button type="button" onClick={() => dispatch(logOut())} className={css.button}>
            Out
         </button>
      </div>
   );
};
