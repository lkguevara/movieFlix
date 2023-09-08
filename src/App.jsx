import {Layout} from 'antd'
import { Routes, Route } from "react-router-dom";
import './App.css'
// Components
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu '
// Pages
import Home from './Pages/Home'
import DetailMovie from './Pages/DetailMovie'
import NotFound from './Pages/NotFound';
import NewsMovies from './Pages/NewsMovies';
import PopularMovies from './Pages/PopularMovies';
import Search from './Pages/Search';
import { Header } from 'antd/es/layout/layout';

function App() {

  return (
    <>
      <Layout>
          <Header className='header'>
            <HamburgerMenu />
          </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-movies" element={<NewsMovies />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
