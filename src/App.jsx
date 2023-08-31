import {Layout} from 'antd'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import DetailMovie from './pages/DetailMovie'
import NotFound from './Pages/NotFound';
import NewsMovies from './Pages/NewsMovies';
import PopularMovies from './Pages/PopularMovies';
import Search from './Pages/Search';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-movies" element={<NewsMovies />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:id" element={<DetailMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
