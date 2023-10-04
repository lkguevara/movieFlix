import {useState, useEffect} from 'react'
import {Row, Col} from "antd"
import {URL_API, URL_TOKEN} from '../utils/constants'
import Footer from '../components/Footer/Footer'
import Loading from '../components/Loading/Loading' 
import MovieCatalog from '../components/MovieCatalog/MovieCatalog'
import Paginate from '../components/Paginate/Paginate'

const NewsMovies = () => {
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`${URL_API}/movie/now_playing?api_key=${URL_TOKEN}&language=es-US&page=${page}`)
      .then(response => response.json())
      .then(data => {
        setMovieList(data)
      })

  }
  , [page])

  console.log(movieList)

  return (
    <Row>
      <Col span={24} style={{textAlign: 'center', marginTop: 25}}>
        <h1 style={{fontSize: 35, fontWeight: 'bold'}}>Últimos Lanzamientos</h1>
      </Col>
      {movieList.results ? (
        <>
          <Col span={24}>
            <MovieCatalog movies={movieList}/>
          </Col>
          <Col span={24}>
            <Paginate
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePages={page => setPage(page)}
            />
          </Col>
        </>
      ) : (
        <Col span={24}>
          <Loading/>
        </Col>
      )}

      <Col span={24}>
        <Footer/>
      </Col>
    </Row>
  )
}

export default NewsMovies