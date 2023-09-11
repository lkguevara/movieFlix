import Loading from '../Loading/Loading'
import PropTypes from 'prop-types'
import './index.scss'
import { Avatar, List } from 'antd'
import { Link } from 'react-router-dom'
import { RightCircleOutlined } from '@ant-design/icons'

const PopularMovies = ({title, movies, showVoteAverage}) => {

    if(movies.loading || !movies.result){
        return <Loading />
    }
    const {results} = movies.result
    const popularMovies = results.slice(0,15)


    return (
        <List 
            className='popularMovies'
            size='default'
            header={<h2>{title}</h2>}
            bordered
            dataSource={popularMovies}
            renderItem={movie => (
                <List.Item className='listItem'>
                    <List.Item.Meta
                        className='listItemMeta'
                        avatar={<Avatar src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />}
                        title={<Link to={`/movie/${movie.id}`}>{movie.title}</Link>}
                        description={showVoteAverage ? <span>{movie.vote_average} / 10  - <span>{movie.release_date.split("-")[0]}</span></span> : null}
                        
                    />
                    <Link to={`/movie/${movie.id}`}>
                        <RightCircleOutlined style={{fontSize: '20px'}} />
                    </Link>
                    

                </List.Item>
            )}
        />
    )
}

PopularMovies.propTypes = {
    movies: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    showVoteAverage: PropTypes.bool.isRequired
}

export default PopularMovies