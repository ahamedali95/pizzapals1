const setPizzas = data => ({ type: 'SET_PIZZAS', payload: data });
const addPizza = data => ({ type: 'ADD_PIZZA', payload: data });
const setIsPizzaLoaderShown = value => ({ type: 'SET_IS_PIZZA_LOADER_SHOWN', payload: value });
const addAlert = value => ({ type: 'ADD_ALERT', payload: value });
const removeAlert = value => ({ type: 'REMOVE_ALERT', payload: value });

module.exports = {
  setPizzas,
  addPizza,
  setIsPizzaLoaderShown,
  addAlert,
  removeAlert
};
