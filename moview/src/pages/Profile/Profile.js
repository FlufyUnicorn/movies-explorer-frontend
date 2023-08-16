import './Profile.css';
import Header from "../../components/Header/Header";

function Profile(props) {
  return (
    <>
      <Header/>
      <section className='profile'>
        <h1 className='profile__title'>{`Привет, ${props.name}!`}</h1>
        <div className='profile__wrapper'>
          <div className="profile__label">
            <p className="profile__label-text">Имя</p>
            <p className="profile__label-text">Виталий</p>
          </div>
          <div className="profile__label">
            <p className="profile__label-text">E-mail</p>
            <p className="profile__label-text">pochta@yandex.ru</p>
          </div>
          <div className="profile__links">
            <p className="profile__link">Редактировать</p>
            <p className="profile__link profile__link_logout">Выйти из аккаунта</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile;