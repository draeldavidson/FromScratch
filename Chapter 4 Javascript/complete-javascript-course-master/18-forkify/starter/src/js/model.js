import { API_URL, KEY } from './config.js';
import { AJAX } from './helpers.js';
import { RES_PER_PAGE } from './config.js';

export const state = {
  recipe: {},
  bookmarks: [],

  search: {
    query: '',
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
};

const createRecipeObj = function(data){
   const {recipe} = data.data;
  return {
    title: recipe.title,
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    //conditionally add properties
    ...(recipe.key && {key: recipe.key})
  };

}
export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObj(data)
    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (error) {
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    state.search.results = data.data.recipes.map(rec => {
      return {
        title: rec.title,
        id: rec.id,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && {key: rec.key})

      };
    });
    state.search.page = 1;
  } catch (error) {
    throw error;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (numServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * numServings) / state.recipe.servings;
  });
  state.recipe.servings = numServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);

  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks();
};

export const rmvBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();
console.log(state.bookmarks);

//FOR DEVELOPMENT

const clearBookmarks = function name(params) {
  localStorage.clear('bookmarks');
};
// clearBookmarks()

export const uploadRecipe = async function (newRecipe) {
  const ingredients = Object.entries(newRecipe)
    .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
    .map(ing => {
      const ingArr = ing[1].split(',').map(el=>el.trim());
      if (ingArr.length !==3){
        throw new Error("Wrong ingredient use correct format");
      }

      const [quantity, unit, description] = ingArr
      return {quantity: quantity ? +quantity: null, unit, description}
    });
    const recipe = {
      title: newRecipe.title ,
      cooking_time: +newRecipe.cookingTime ,
      image_url: newRecipe.image ,
      publisher: newRecipe.publisher ,
      servings: +newRecipe.servings ,
      source_url: newRecipe.sourceUrl ,
      ingredients,
      // id: newRecipe.id ,
    
    }
  const data = await AJAX(`${API_URL}?key=${KEY}`, recipe)
  state.recipe = createRecipeObj(data)
  addBookmark(state.recipe);
  console.log(data);
};
