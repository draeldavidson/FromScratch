import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PagingView extends View {
  _parentElement = document.querySelector('.pagination');

  prevPage(page) {
    return `
      <button data-goto="${page - 1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${page - 1}</span>
      </button>
    `;
  }
  nextPage(page) {
    return `
    <button data-goto="${page + 1}" class="btn--inline pagination__btn--next">
    <span>Page ${page + 1}</span>
    <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
    </svg>
    </button>
  `;
  }

  bothBtns(page) { 
    return `
  <button data-goto="${page - 1}" class="btn--inline pagination__btn--prev">
  <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
  </svg>
  <span>Page ${page - 1}</span>
  </button>
  <button data-goto="${page + 1}" class="btn--inline pagination__btn--next">
  <span>Page ${page + 1}</span>
  <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
  </svg>
  </button>

`}

addHandlerClick(handler){
    this._parentElement.addEventListener('click', function (event) {
        const btn = event.target.closest('.btn--inline')
        if (!btn) return;


        const goToPage = +btn.dataset.goto
        handler(goToPage);



    })
}
  _generateMarkup() {
      
      const curPage = this.data.page;
    const numPages = Math.ceil(
      this.data.results.length / this.data.resultsPerPage
    );
    console.log(numPages);

    //Page 1 but more show right button
    if (curPage === 1 && numPages > 1) {
      return this.nextPage(curPage);
    }

    //Last page show left button
    if (curPage === numPages && numPages > 1) {
      console.log(typeof curPage);
      return this.prevPage(curPage);
    }

    //other page show left and right button
    if (curPage < numPages) {
      return this.bothBtns(curPage);
    }
    //Only one page show no buttons
    if (curPage === numPages && numPages === 1) return '' ;
    
  }

}

export default new PagingView();
