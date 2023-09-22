import {useParams} from "react-router-dom"
import {useState} from "react"
import moment from "moment"
import {useFetch} from "../../Hooks/useFetch"
import {URL_TOKEN, URL_API} from "../../utils/constants"
import Loading from "../../components/Loading/Loading"
import {Row, Col, Button} from "antd"
import ModalVideo from "../../components/ModalVideo/ModalVideo"
import { PlayCircleOutlined } from "@ant-design/icons"
import "./index.scss"

const DetailMovie = () => {
  const {id} = useParams()
  const movieInfo = useFetch(`${URL_API}/movie/${id}?api_key=${URL_TOKEN}&language=es-ES`)
  
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const videoMovie = useFetch(`${URL_API}/movie/${id}/videos?api_key=${URL_TOKEN}&language=es-ES`)

  const openModal = () => setIsVisibleModal(true)
  const closeModal = () => setIsVisibleModal(false)

  const renderVideo = () => {
    if(videoMovie.result) {
      if(videoMovie.result.results.length > 0) {
        return (
          <>
            <Button icon={<PlayCircleOutlined />} onClick={openModal}>
              Ver Trailer
            </Button>
            <ModalVideo
              videoKey={videoMovie.result.results[0].key}
              videoPlataform={videoMovie.result.results[0].site}
              isOpen={isVisibleModal}
              close={closeModal}
            />
          </>
        )
      }
    }
  }
  

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
            {renderVideo()}
          </div>
          <div className="detailMovie__info-content">
            <h3>Información General</h3>
            <p>{movieInfo.result.overview}</p>
            <h3>Generos</h3>
            <ul className="detailMovie__info-content-genres">
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