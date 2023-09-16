import React from "react";
import Header from "../../components/Header/Header";
import useFormValidation from "../../hooks/useFormValidation";
import UserContext from '../../context/UserContext';

import './Profile.css';

function Profile(props) {
  const { values, handleChange, updateForm, errors, isValid } = useFormValidation();
  const currentUser = React.useContext(UserContext);
  const validity = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

  function handleSubmit(e) {
    e.preventDefault();
    props.handleProfile(values);
  }
  React.useEffect(() => {
    if (currentUser) {
      updateForm(currentUser, {}, true);
    }
  }, [currentUser, updateForm]);

  return (
    <>
      <Header/>
      <main>
        <form className='profile' name='profile' noValidate onSubmit={handleSubmit}>
          <h1 className='profile__title'>{`Привет, ${currentUser.name || ''}!`}</h1>
          <div className='profile__wrapper'>
            <label className="profile__label">
              <span className="profile__label-text">Имя</span>
              <input
                className="profile__label-text"
                name='name'
                type='text'
                required
                onChange={handleChange}
                value={values.name || ''}
              />
              {/*<span className="profile__error">{errors.name || ''}</span>*/}
            </label>
            <label className="profile__label">
              <span className="profile__label-text">E-mail</span>
              <input
                className="profile__label-text"
                name='email'
                type='email'
                required
                onChange={handleChange}
                value={values.email || ''}
              />
              {/*<span className="profile__error">{errors.email || ''}</span>*/}
            </label>
            <div className="profile__links">
              <button className="profile__link" disabled={validity}>Редактировать</button>
              <button className="profile__link profile__link_logout" onClick={props.handleSignOut}>Выйти из аккаунта</button>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

export default Profile;