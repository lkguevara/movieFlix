import {Col, Card} from 'antd'
import {Link} from 'react-router-dom'
import {EyeOutlined} from '@ant-design/icons'
const {Meta} = Card
import './index.scss'

const MovieCatalog = ({movies}) => {

  return (
    <div className="movie-catalog">
        {movies.map(movie => (
            <Col key={movie.id} xs={4} className="movie-catalog">
                <Link to={`/movie/${movie.id}`}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={movie.title} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />}
                        actions={[<EyeOutlined />]}
                    >
                        <Meta title={movie.title} />
                    </Card>
                </Link>
            </Col>
        ))}
    </div>
  )
}

export default MovieCatalog