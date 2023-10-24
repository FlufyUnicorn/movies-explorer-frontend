import './Portfolio.css';

function Portfolio(props) {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__elements'>
        {props.links.map(item => <li className='portfolio__element' key={item.text}>
          <a className='portfolio__link' href={item.href} target='_blank' rel='noreferrer'>{item.text}</a>
        </li>)}
      </ul>
    </section>
  )
}

export default Portfolio;