//todas las api es muy buena ide que tengan versionas por si evolucionan en el futuro, no se tiren los clientes que han usado esa api en la version anterior, si hacen cambios estructurales, lo muieven a una nueva versión por ejemplo de  /3/ a /4/ y ya se pueda trabajar sin problemas

//{media_type}: tipo de tendencias que queremos buscar; movie 
//{time_window}: cuando queremos ver las tendencias; day 
//no olvides enviar tu api key;?api_key=

async function getTrendingMoviesPreview(){
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    const data = await res.json();
    const movies = data.results;
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path,);

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
}

getTrendingMoviesPreview();
