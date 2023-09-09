import './index.scss'

import {Carousel} from 'antd'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Loading from '../Loading/Loading'


const SliderMovies = ({movies}) => {
    if(movies.loading || !movies.result){
        return <Loading />
    }
    
    const {results} = movies.result
    const nowPlaying = results.slice(0,5)

    return (
        <Carousel autoplay className="slider-movies">
            {nowPlaying.map(movie => (
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