//Solución del código repetido 
//Para solucionar el segundo reto (ahorrarnos líneas de código para una funcionalidad que se repite), lo que hice fue hacer una función llamada printMoviePosters, que recibe como paråmetros el objeto movies, y la sección en la que corresponde. Luego, cada función que la necesite la llamará, pasándole los parámetros correspondientes:

const printMoviePosters = (movies, section) => {
    section.innerHTML = "";

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute(
            'src',
            `${POSTER_300W_URL}${movie.poster_path}`
        );

        movieContainer.appendChild(movieImg);
        section.appendChild(movieContainer);

    });
}
 
const getTrendingMoviesPreview = async () => {
    const { data } = await api('/trending/movie/day');
    const movies = data.results;

    printMoviePosters(movies, trendingMoviesPreviewList);
}

const getMoviesByCategory = async (categoryId) => {
    const { data } = await api('/discover/movie', {
        params: {
            with_genres: categoryId,
        },
    }
    );
    const movies = data.results;

    printMoviePosters(movies, genericSection);
}

//En cuanto al reto del problema del scroll, creo haberlo solucionado agregando el scrollTo(0,0) en la función que se dispara al hacer click en el botón categoryTitle:

//POSTER_300W_URL simplemente es una variable en la que guardé la url que nos permite imprimir los pósters con una ancho de 300:


const POSTER_300W_URL = 'https://image.tmdb.org/t/p/w300';
