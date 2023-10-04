import {Row, Col, Input} from 'antd'
import history from "history/browser";
import queryString from 'query-string'
import { useEffect, useState } from 'react';
import MovieCatalog from '../../components/MovieCatalog/MovieCatalog';
import Footer from '../../components/Footer/Footer';
import {URL_API, URL_TOKEN} from '../../utils/constants'
import './index.scss'

const Search = () => {

  const [movieList, setMovieList] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(history.location.search)
      const {s} = searchValue.query
      const response = await fetch(`${URL_API}/search/movie?api_key=${URL_TOKEN}&language=es-ES&query=${s}&page=1`)
      const movies = await response.json()
      setSearchValue(s)
      setMovieList(movies)
    })()
  }, [history.location.search]);

  const onChangeSearch = e => {
    const urlParams = queryString.parse(history.location.search)
    urlParams.s = e.target.value
    history.push(`?${queryString.stringify(urlParams)}`)
    setSearchValue(e.target.value)
  }

  return (
    <>
      <Row>
        <Col span={12} offset={6} className="search">
          <h1>Busca tu pelicula</h1>
          <Input value={searchValue} onChange={onChangeSearch} />
        </Col>
      </Row>
      {movieList.results && (
        <Row>
          <Col span={24}>
            <MovieCatalog movies={movieList} />
          </Col>
        </Row>
      )}
      <Footer />
    </>
  )
}

export default Search