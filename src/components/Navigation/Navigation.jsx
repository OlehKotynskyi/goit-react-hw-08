import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';

export const Navigation = () => {
   const { isLoggedIn } = useAuth();

   return (
      <nav>
         <NavLink to="/">
            <img
               src="https://cdn.pixabay.com/photo/2013/07/13/12/34/book-159880_1280.png"
               alt="Free book phone telephone vector"
               title="Download free HD stock image of Book Phone"
               width={50}
            />
         </NavLink>
         {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
   );
};
