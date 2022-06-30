import * as model from './model.js';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(`the id : ${id}`);
    if (!id) return;
    recipeView.renderSpinner();
    console.log('spinning');
    //1) loading recipe
    //gives access to state.recipe
    await model.loadRecipe(id);

    //(2.rendering recipe)
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(`controlRecipes ${err}`);
  }
};
// controlRecipes();

['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, controlRecipes)
);
// window.addEventListener('hashchange',controlRecipes)
// window.addEventListener('load',controlRecipes)
