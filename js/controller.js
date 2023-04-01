import * as model from './model.js';
import adviceView from './adviceView.js';

const controlAdvice = async function () {
  try {
    await model.loadAdvice();
    const { advice } = model.state;
    adviceView._renderAdvice(advice);
  } catch (err) {
    alert(err);
  }
};

const init = function () {
  adviceView.loadAdvice(controlAdvice);
  adviceView.addHandlerClick(controlAdvice);
};
init();
