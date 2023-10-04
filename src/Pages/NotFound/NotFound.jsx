import "./index.scss";
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="error">
      <h1>Error 404</h1>
      <h2>Pagina no encontrada</h2>

      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default NotFound