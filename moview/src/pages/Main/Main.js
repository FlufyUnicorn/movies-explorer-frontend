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
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default Main;