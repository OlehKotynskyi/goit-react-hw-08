import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import deleteContact from '../../redux/contacts/contactsSlice';
import Checking from '../Checking/Checking';

const ContactList = ({ id }) => {
   const contacts = useSelector(selectVisibleContacts);
   const dispatch = useDispatch();
   const handleDelItem = () => {
      dispatch(deleteContact.deleteContact(id));
   };

   return (
      <ul className={css.list}>
         {contacts.length === 0 ? (
            <Checking />
         ) : (
            contacts.map(item => {
               return (
                  <li key={item.id}>
                     <Contact onDelete={handleDelItem} item={item} />
                  </li>
               );
            })
         )}
      </ul>
   );
};

export default ContactList;
