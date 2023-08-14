import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import SearchForm from "../../components/SearchForm/SearchForm";

function Movies() {
  return (
    <>
      <Header/>
      <SearchForm/>
      <MoviesCardList/>
      <Footer/>
    </>
  )
}

export default Movies;