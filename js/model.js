//config
const API_URL = '	https://api.adviceslip.com/advice';

//data
export const state = {
  advice: {},
};

export const loadAdvice = async function () {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    if (!res.ok) throw new Error(`Problem getting the advice ${res.status} 🤬🤬💥`);
    state.advice = {
      id: data.slip.id,
      advice: data.slip.advice,
    };
  } catch (err) {
    console.error(`${err.message}`);
  }
};
