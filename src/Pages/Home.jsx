import {useFetch} from '../Hooks/useFetch'

const Home = () => {

  const {result, loading, error} = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=af59caeef70579798b8e6d985ff921ae')
  const popularMovies = result?.results
  console.log(popularMovies)

  return (
    <div>
      {error && <h1>Error: {error}</h1>}
      {loading && <h1>Loading...</h1>}
      {
        popularMovies?.map((movie) => {
          return (
            <div key={movie.id}>
              <h1>{movie.original_title}</h1>
            </div>
          )
        }
        )
      }
    </div>
  )
}

export default Home