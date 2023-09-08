import './SliderMovies.scss'
import {Carousel} from 'antd'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


const SliderMovies = ({movies}) => {

    if(movies.loading || !movies.result){
        return 'Loading...'
    }

    console.log(movies.result.results)

    return (
        <Carousel autoplay className="slider-movies">
            {movies.result.results.map(movie => (
                <div key={movie.id} className="slider-movies__movie">
                    <Link to={`/movie/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title}/>
                    </Link>
                </div>
                
            ))}
        </Carousel>
    )
}

SliderMovies.propTypes = {
    movies: PropTypes.array.isRequired
}

export default SliderMovies