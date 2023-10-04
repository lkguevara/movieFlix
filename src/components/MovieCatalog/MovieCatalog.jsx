import {Col, Card} from 'antd'
import {Link} from 'react-router-dom'
import {EyeOutlined} from '@ant-design/icons'
const {Meta} = Card
import './index.scss'

const MovieCatalog = ({movies}) => {

    console.log(movies.results)
  return (
    <div className="movie-catalog">
        {movies.results.map(movie => (
            <Col key={movie.id} xs={4} className="movie-catalog">
                <Link to={`/movie/${movie.id}`}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={movie.title} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />}
                        actions={[<EyeOutlined key="detail"/>]}
                    >
                        <Meta 
                            title={movie.title} 
                            description={movie.overview.substr(0, 50) + '...'}
                        />
                    </Card>
                </Link>
            </Col>
        ))}
    </div>
  )
}

export default MovieCatalog