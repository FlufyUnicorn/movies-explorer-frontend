import ok from '../../images/ok.svg';
import not_ok from '../../images/not_ok.svg';

import './InfoTooltip.css';

function InfoTooltip(props) {
  function handleOverlayClick(evt) {
    evt.stopPropagation();
  }
  return(
    <div className={`popup ${props.status.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container" onClick={handleOverlayClick}>
        <button className="popup__close-button" type="button" onClick={props.onClose}/>
        <img src={props.status.successful ? ok: not_ok} alt={props.status.successful ? "Регистрация прошла успешно": 'Что-то пошло не так!\n' + 'Попробуйте ещё раз.'} className='popup__icon'/>
        <p className='popup__text'>{props.status.text}</p>
      </div>
    </div>
  )
}

export default InfoTooltip;