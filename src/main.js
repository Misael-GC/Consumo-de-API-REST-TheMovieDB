//todas las api es muy buena ide que tengan versionas por si evolucionan en el futuro, no se tiren los clientes que han usado esa api en la version anterior, si hacen cambios estructurales, lo muieven a una nueva versión por ejemplo de  /3/ a /4/ y ya se pueda trabajar sin problemas

//{media_type}: tipo de tendencias que queremos buscar; movie 
//{time_window}: cuando queremos ver las tendencias; day 
//no olvides enviar tu api key;?api_key=

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
    },
    params:{
        'api_key':API_KEY,
    },
})

//Utils: Funciones que te ayuden a reutilizar código y que se llamaran a las funciones de llamado a la API
function createMovies(movies, container){
    container.innerHTML = '';

        movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path,);

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    });
}

function createCategories(categories, container){
    container.innerHTML = "";

    categories.forEach(category => {
        
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        // const categoryImg = document.createElement('img');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        categoryTitle.addEventListener('click', () => {
            location.hash = `#category=${category.id}-${category.name}`;
        });
        const categoryTitleText = document.createTextNode(category.name);

        //meter los items dentro de los contenedores html
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);
    });
}
//Llamados a la API


async function getTrendingMoviesPreview(){
    const {data} = await api ('trending/movie/day');
    const movies = data.results;

    createMovies(movies, trendingMoviesPreviewList)
    
}

async function getCategoriesPreview(){
    const { data } = await api('genre/movie/list');

    const categories = data.genres;

    createCategories(categories, categoriesPreviewList);
}

async function getMoviesByCategory(id){
    const {data} = await api ('/discover/movie',{
        params:{
            with_genres: id,
        },
    });
    const movies = data.results;
    
    createMovies(movies, genericSection)
}

async function getMoviesBySearch(query){
    const {data} = await api ('search/movie',{
        params:{
            query,
        },
    });
    const movies = data.results;
    
    createMovies(movies, genericSection)
}


async function getTrendingMovies(){
    const {data} = await api ('trending/movie/day');
    const movies = data.results;

    createMovies(movies, genericSection)

}
