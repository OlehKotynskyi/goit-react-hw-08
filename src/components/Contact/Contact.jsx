import css from './Contact.module.css';

import { ModalDeleteContact } from '../ModalDeleteContact/ModalDeleteContact';
import { useState } from 'react';
import ContactChangeModal from '../ContactChangeModal/ContactChangeModal';

const Contact = ({ item }) => {
   const { id, name, number } = item;
   const [winModalIsOpen, setWinModalIsOpen] = useState(false);
   const [winModalUpdateIsOpen, setWinModalUpdateIsOpen] = useState(false);

   return (
      <>
         <div className={css.contacts}>
            <div className={css.wrap}>
               <p>Name: {name}</p>
            </div>
            <div className={css.wrap}>
               <p>Number: {number}</p>
            </div>

            <button
               className={css.button}
               type="button"
               onClick={() => setWinModalUpdateIsOpen(true)}
            >
               Edit
            </button>
            <button className={css.button} type="button" onClick={() => setWinModalIsOpen(true)}>
               Delete
            </button>
         </div>
         <ModalDeleteContact
            isOpen={winModalIsOpen}
            id={id}
            onClose={() => setWinModalIsOpen(false)}
         />
         <ContactChangeModal
            isOpen={winModalUpdateIsOpen}
            name={name}
            number={number}
            id={id}
            onClose={() => setWinModalUpdateIsOpen(false)}
         />
      </>
   );
};

export default Contact;
