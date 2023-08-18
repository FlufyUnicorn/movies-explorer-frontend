import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__bottom'>
        <p className='footer__year'>© {new Date().getFullYear()}</p>
        <ul className='footer__links'>
          <li className='footer__link-container'>
            <a className='footer__link' href='https://practicum.yandex.ru' target='_blank'>Яндекс.Практикум</a>
          </li>
          <li className='footer__link-container'>
            <a className='footer__link' href='https://github.com/FlufyUnicorn' target='_blank'>Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;