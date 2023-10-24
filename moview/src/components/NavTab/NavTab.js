import './NavTab.css';

function NavTab(props) {
  return (
    <nav className='nav'>
      {props.links.map(item => <a className='nav__link' href={item.href} key={item.text}>{item.text}</a>)}
    </nav>
  )
}

export default NavTab;