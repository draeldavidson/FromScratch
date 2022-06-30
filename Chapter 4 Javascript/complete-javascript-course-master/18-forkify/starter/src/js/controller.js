import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import searchResultsView from './views/searchResultsView.js';
import pagingView from './views/pagingView.js';

// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    // searchResultsView.renderSpinner()
    //1) loading recipe
    //gives access to state.recipe
    await model.loadRecipe(id);

    //(2.rendering recipe)
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    searchView.clearInput();
    // searchResultsView.render(model.state.search.results)
    searchResultsView.render(model.getSearchResultsPage());

    //4) Render initial Paging buttons
    pagingView.render(model.state.search)
  } catch (error) {
    throw error;
  }
};
const init = function () {
  recipeView.addHandelerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
