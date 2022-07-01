import * as model from './model.js';
import { MODAL_CLOSE_SEC  } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import searchResultsView from './views/searchResultsView.js';
import pagingView from './views/pagingView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    // searchResultsView.renderSpinner()

    searchResultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);
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
    pagingView.render(model.state.search);
  } catch (error) {
    throw error;
  }
};
const controlPages = function (goToPage) {
  // render new results
  searchResultsView.render(model.getSearchResultsPage(goToPage));

  //4) Render new Paging buttons
  pagingView.render(model.state.search);
};

const controlServings = function (updateTo) {
  // Update the recipe view

  //update recipe
  model.updateServings(updateTo);
  //update recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //Adds or removes bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.rmvBookmark(model.state.recipe.id);
  //updates
  recipeView.update(model.state.recipe);
  //renders
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
addRecipeView.renderSpinner()

    await model.uploadRecipe(newRecipe)
    console.log(model.state.recipe);
    //render recipe
    recipeView.render(model.state.recipe)

    //success message
    addRecipeView.renderMessage()
    //close form

bookmarksView.render(model.state.bookmarks)

window.history.pushState(null, '', `#${model.state.recipe.id}`)




    setTimeout(() => {
      addRecipeView.toggleWindow()
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    console.error('🚨', error)
    addRecipeView.renderError(error.message)
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandelerRender(controlRecipes);
  recipeView.addHandelerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  // recipeView.addHandlerAddBookmark(controlRemBookmark)
  addRecipeView.addHandlerUpload(controlAddRecipe);
  searchView.addHandlerSearch(controlSearchResults);
  pagingView.addHandlerClick(controlPages);
  // controlServings()
};
init();
