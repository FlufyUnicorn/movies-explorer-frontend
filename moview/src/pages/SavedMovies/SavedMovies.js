import './SavedMovies.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import SearchForm from "../../components/SearchForm/SearchForm";

function SavedMovies() {
  return (
    <>
      <Header/>
      <main className='main'>
        <SearchForm/>
        <MoviesCardList/>
        <Footer/>
      </main>
    </>
  )
}

export default SavedMovies;