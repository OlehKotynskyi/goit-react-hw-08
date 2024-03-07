import Modal from 'react-modal';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import css from './ModalDeleteContact.module.css';

const customStyles = {
   content: {
      height: '130px',
      width: '250px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      backgroundSize: 'cover',
      transform: 'translate(-50%, -50%)',
   },
   overlay: {
      background: 'rgba(22, 22, 22, 0.8)',
   },
};

export const ModalDeleteContact = ({ isOpen, onClose, id }) => {
   const dispatch = useDispatch();
   const handleDel = () => dispatch(deleteContact(id));

   return (
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} ariaHideApp={false}>
         <div className={css.modalBox}>
            <h3>Are you sure? Remove?</h3>
            <div className={css.wrapper}>
               <button type="button" className={css.button} id={id} onClick={handleDel}>
                  Yes
               </button>
               <button type="button" className={css.button} id={id} onClick={onClose}>
                  No
               </button>
            </div>
         </div>
      </Modal>
   );
};
