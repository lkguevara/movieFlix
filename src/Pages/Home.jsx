import SliderMovies from '../components/SliderMovies/SliderMovies'
import {useFetch} from '../Hooks/useFetch'
import {URL_API, URL_TOKEN} from '../utils/constants'
import '../App.css'
import PopularMovies from '../components/PopularMovies/PopularMovies'

const Home = () => {
  const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${URL_TOKEN}&language=es-US&page=1`)
  const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${URL_TOKEN}&language=es-US&page=1`)
  const topRatedMovies = useFetch(`${URL_API}/movie/top_rated?api_key=${URL_TOKEN}&language=es-US&page=1`)
  console.log(topRatedMovies)

  return (
    <div className='carousel'>
      <SliderMovies movies={newMovies}/>
      <section className='popularMovies'>
        <PopularMovies title='Películas Populares' movies={popularMovies} showVoteAverage={false}/>
        <PopularMovies title='Películas Más Votadas' movies={topRatedMovies} showVoteAverage={true}/>
      </section>
    </div>
  )
}

export default Home