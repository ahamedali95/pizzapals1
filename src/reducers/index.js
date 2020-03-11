const initialState = Object.freeze({
  pizzas: [],
  isPizzaLoaderShown: false,
  alerts: []
});

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_PIZZAS':
      return { ...state, pizzas: action.payload };
    case 'ADD_PIZZA':
      return {...state, pizzas: [action.payload, ...state.pizzas]};
    case 'SET_IS_PIZZA_LOADER_SHOWN':
      return {...state, isPizzaLoaderShown: action.payload};
    case 'ADD_ALERT':
      return {...state, alerts: [...state.alerts, action.payload]};
    case 'REMOVE_ALERT':
      return {...state, alerts: state.alerts.filter(alert => alert.id !== action.payload)};
    default:
      return state
  }
};

export default reducer;
