import icons from 'url:../../img/icons.svg';
import View from "./View.js";
import previewView from './previewView.js';

class SearchResultsView extends View{
_parentElement = document.querySelector('.results')
_errorMessage = `🚨 No recipies founnd. Please try another one!`
_successMessage = `We could not find that recipe. Please try another one!`

_generateMarkup() {
  return this.data
    .map(result => previewView.render(result, false))
    .join('');
}
}

export default new SearchResultsView();