import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav'>
      <a className='nav__link' href='#project'>О проекте</a>
      <a className='nav__link' href='#techs'>Технологии</a>
      <a className='nav__link' href='#student'>Студент</a>
    </nav>
  )
}

export default NavTab;