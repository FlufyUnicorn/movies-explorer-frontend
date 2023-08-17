import Promo from "../../components/Promo/Promo";
import NavTab from "../../components/NavTab/NavTab";
import AboutProject from "../../components/AboutProject/AboutProject";
import Techs from "../../components/Techs/Techs";
import AboutMe from "../../components/AboutMe/AboutMe";
import Portfolio from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Main() {
  return (
    <>
      <Header/>
      <main>
        <Promo/>
        <NavTab links={[{href: '#project', text: 'О проекте'}, {href: '#techs', text: 'Технологии'}, {
          href: '#student',
          text: 'Студент'
        }]}/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio links={[{
          href: 'https://github.com/FlufyUnicorn/how-to-learn',
          text: 'Статичный сайт'
        }, {
          href: 'https://github.com/FlufyUnicorn/russian-travel',
          text: 'Адаптивный сайт'
        }, {href: 'https://github.com/FlufyUnicorn/react-mesto-api-full-gha', text: 'Одностраничное приложение'}]}/>
      </main>
      <Footer/>
    </>
  )
}

export default Main;