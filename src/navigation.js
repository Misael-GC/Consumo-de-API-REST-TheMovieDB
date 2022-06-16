searchFormBtn.addEventListener('click', ()=>{
  location.hash='#search=' + searchFormInput.value.split(" ").join('');
});

arrowBtn.addEventListener('click', () => {
  location.hash = window.history.back();
});

trendingBtn.addEventListener('click', ()=>{
  location.hash='#trends=';
});

arrowBtn.addEventListener('click', () => {
  location.hash = '#home'
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({location});

    if (location.hash.startsWith('#trends')) {
        trendsPage();
      } else if (location.hash.startsWith('#search=')) {
        searchPage();
      } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();
      } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
      } else {
        homePage();
      }
      // document.body.scrollTop=0;
      document.documentElement.scrollTop = 0;
}

function homePage() {
    console.log('Home!!');
  
    headerSection.classList.remove('header-container--long');
    headerSection.getElementsByClassName.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview()
  }
  
  function categoriesPage() {
    console.log('categories!!');

    headerSection.classList.remove('header-container--long');
    headerSection.getElementsByClassName.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    //['#category', 'id-name']
    const [_, categoryData] =location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');
    //const newName = categoryName.replace('%20', ' '); /*Aporte para corregir el %20 que aparecia en el titulo entre 2 palabras */
    const newName2 =decodeURI(categoryName);
    headerCategoryTitle.innerHTML = newName2;

    getMoviesByCategory(categoryId);
   // window.scrollTo(0, 0); /*nos ayuda a que al cambiar de página nos lleve al inicio y no al final*/
  }

  function movieDetailsPage() {
    console.log('Movie!!');

    headerSection.classList.add('header-container--long');
    // headerSection.getElementsByClassName.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
  }
  
  function searchPage() {
    console.log('Search!!');

    headerSection.classList.remove('header-container--long');
    headerSection.getElementsByClassName.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    //['#category', 'id-name']
    const [_, query] =location.hash.split('=');
    getMoviesBySearch(query);
  }
  
  function trendsPage() {
    console.log('TRENDS!!');

    headerSection.classList.remove('header-container--long');
    headerSection.getElementsByClassName.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
  }

//Opción de operadores ternarios
// location.hash.startsWith('#trends')    ? trendsPage()       :
// location.hash.startsWith('#search=')   ? searchPage()       :
// location.hash.startsWith('#movie=')    ? movieDetailsPage() :
// location.hash.startsWith('#category=') ? categoriesPage()   :
// homePage()

// y los addEventListener de los botones SearchformBtn, trendingBtn y arrowBtn pueden escribirse en una sola línea omitiendo las llaves:
// arrowBtn.addEventListener('click', () => location.hash = 'home')
//Aporte: Orlando Díaz Torrealva
