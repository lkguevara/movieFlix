import {useParams} from "react-router-dom"
import moment from "moment"
import {useFetch} from "../../Hooks/useFetch"
import {URL_TOKEN, URL_API} from "../../utils/constants"
import Loading from "../../components/Loading/Loading"
import {Row, Col} from "antd"
import "./index.scss"

const DetailMovie = () => {
  const {id} = useParams()
  const movieInfo = useFetch(`${URL_API}/movie/${id}?api_key=${URL_TOKEN}&language=es-ES`)
  console.log(movieInfo)

  if(movieInfo.loading || !movieInfo.result) {
    return <Loading />
  }

  return (
    <div 
      className="detailMovie"
      style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo.result.backdrop_path})`}}
    >
      <div className="detailMovie__dark"/>
      <Row>
        <Col span={8} offset={3} className="detailMovie__poster">
          <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo.result.poster_path})`}}/>
        </Col>
        <Col span={10} className="detailMovie__info">
          <div className="detailMovie__info-header">
            <h1>{movieInfo.result.title}<span>{moment(movieInfo.result.release_date, "YYYY-MM-DD").format("YYYY")}</span></h1>
            <button>
              Ver trailer
            </button>
          </div>
          <div className="detailMovie__info-content">
            <h3>Información General</h3>
            <p>{movieInfo.result.overview}</p>
            <h3>Generos</h3>
            <ul>
              {movieInfo.result.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DetailMovie