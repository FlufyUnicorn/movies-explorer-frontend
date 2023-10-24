import StudentImage from '../../images/student.jpg';

import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about' id='student'>
      <h2 className='about__title'>Студент</h2>
      <div className='about__content'>
        <div className='about__text-info'>
          <h3 className='about__name'>Анастасия</h3>
          <p className='about__prof'>Фронтенд-разработчик, 23 года</p>
          <p className='about__descr'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
            компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
            и ушёл с постоянной работы.</p>
          <a className='about__link' href='https://github.com/FlufyUnicorn' target='_blank' rel='noreferrer'>Github</a>
        </div>
        <img className='about__image' src={StudentImage} alt='Фотография студента'/>
      </div>

    </section>
  )
}

export default AboutMe;