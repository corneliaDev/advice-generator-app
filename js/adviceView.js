class adviceView {
  _getAdviceBtn = document.querySelector('.btn');
  _adviceID = document.querySelector('.advice__id');
  _adviceText = document.querySelector('.advice__text');

  _data;

  loadAdvice(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerClick(handler) {
    this._getAdviceBtn.addEventListener('click', handler);
  }

  _renderAdvice = function (data) {
    this._data = data;
    this._adviceID.textContent = `Advice #${this._data.id}`;
    this._adviceText.textContent = `${this._data.advice}`;
  };
}

export default new adviceView();
