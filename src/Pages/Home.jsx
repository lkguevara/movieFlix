import SliderMovies from '../components/SliderMovies/SliderMovies'
import {useFetch} from '../Hooks/useFetch'
import {URL_API, URL_TOKEN} from '../utils/constants'
import '../App.css'
import PopularMovies from '../components/PopularMovies/PopularMovies'

const Home = () => {
  const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${URL_TOKEN}&language=es-US&page=1`)
  const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${URL_TOKEN}&language=es-US&page=1`)
  

  return (
    <div className='carousel'>
      <SliderMovies movies={newMovies}/>
      <PopularMovies title='Películas Populares' movies={popularMovies}/>
    </div>
  )
}

export default Home