import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
   return (
      <>
         <h3 className={css.error}>Oh, reload the page!</h3>
      </>
   );
};

export default ErrorMessage;
