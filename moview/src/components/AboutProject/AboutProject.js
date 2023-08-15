import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className="about-project__content">
        <ul className="about-project__items">
          <li className="about-project__item">
            <h3 className="about-project__item-title">Дипломный проект включал в себя 5 этапов</h3>
            <p className="about-project__item-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные<br/>доработки.
            </p>
          </li>
          <li className="about-project__item">
            <h3 className="about-project__item-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__item-text">
              У каждого этапа был мягкий и жёсткий дедлайн,<br/> которые нужно было
              соблюдать, чтобы успешно<br/> защититься.
            </p>
          </li>
        </ul>
        <ul className="about-project__steps">
          <li className="about-project__step about-project__step-first">
            <h4 className="about-project__step-title about-project__step-title-first">1 неделя</h4>
            <p className="about-project__step-description">Back-end</p>
          </li>
          <li className="about-project__step">
            <h4 className="about-project__step-title">4 недели</h4>
            <p className="about-project__step-description">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutProject;