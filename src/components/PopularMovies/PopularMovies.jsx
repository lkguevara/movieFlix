import Loading from '../Loading/Loading'
import PropTypes from 'prop-types'
import './index.scss'
import { Avatar, List } from 'antd'

const PopularMovies = ({title, movies}) => {

    if(movies.loading || !movies.result){
        return <Loading />
    }
    const {results} = movies.result
    const popularMovies = results.slice(0,10)


    return (
        <List 
            className='popular-movies'
            size='default'
            header={<h2>{title}</h2>}
            bordered
            dataSource={popularMovies}
            renderItem={movie => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />}
                        title={movie.title}
                        // Puedes agregar más detalles de la película aquí
                    />
                </List.Item>
            )}
        />
    )
}

PopularMovies.propTypes = {
    movies: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default PopularMovies