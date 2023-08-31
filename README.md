# MovieFlix

MovieFlix es una aplicación que te permite explorar y descubrir películas utilizando la API de themoviedb.org. Podrás ver las últimas películas lanzadas, las más populares y las mejor puntuadas.

## Características Principales

- **Slider de Últimas Películas:** En la página de inicio, encontrarás un slider con las últimas 20 películas que se han lanzado al mercado.

- **Listas de Películas:** Explora listas de las películas más populares y las mejor puntuadas.

- **Detalles de Películas:** Cada película tiene una página dedicada con información detallada, incluyendo carátula, título, año de lanzamiento, información general y géneros.

- **Reproducción de Trailers:** En la página de detalles de cada película, podrás ver el trailer haciendo clic en un botón de reproducción.

- **Paginación Reactiva:** Tanto en la lista de últimos lanzamientos como en las páginas de listas de películas, la paginación se actualiza de manera reactiva, lo que significa que no es necesario recargar la página.

- **Búsqueda de Películas:** Utiliza el buscador para encontrar películas por título.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias usando el comando: `npm install`

## Configuración de la API

Para utilizar CineStream, necesitarás una API key de themoviedb.org. Sigue los pasos a continuación para configurarla:

1. Regístrate en [themoviedb.org](https://www.themoviedb.org/signup) para obtener una API key.
2. Copia tu API key.
3. Crea un archivo `.env` en la raíz del proyecto.
4. Agrega tu API key en el archivo `.env` de la siguiente manera: `REACT_APP_API_KEY=your_api_key`

## Ejecución
Una vez que hayas instalado las dependencias y configurado tu API key, puedes ejecutar el proyecto usando el comando: `npm run dev`

## Tecnologías Utilizadas

- React: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- Ant Design (Antd): Biblioteca de componentes UI para React.
- Node-Sass: Extensión de Sass para compilar estilos en CSS.
- Query String: Librería para manipulación de cadenas de consulta URL.
- RC Pagination: Componente de paginación reactiva.
- React Player: Componente para reproducir videos, útil para reproducir trailers.
- React Router Dom: Manejo de rutas y navegación en la aplicación.