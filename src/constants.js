export const apiBaseUrl = (() => 'http://pizzapals.herokuapp.com')();

export const pizzaFetchFailureAlert = (() => {
  return {
    id: 'pizza-fetch-failure-alert',
    color: 'red',
    header: 'Unable to fetch pizzas. Please try again later.',
    list: []
  };
})();

export const pizzaSubmissionSuccessAlert = (() => {
  return {
    id: 'pizza-submission-success-alert',
    color: 'green',
    header: 'Pizza created successfully.',
    list: []
  };
})();

export const pizzaSubmissionFailureAlert = (() => {
  return {
    id: 'pizza-submission-failure-alert',
    color: 'red',
    header: 'Unable to create pizza. Please try again later.',
    list: []
  };
})();

export const logoutSuccessAlert = (() => {
  return {
    id: 'logout-success-alert',
    color: 'green',
    header: 'Logout successful. Goodbye!',
    list: []
  };
})();


export const employees = (() => ([
  'Ahamed Abbas',
  'Mcvvina Lin',
  'Kathy Wong',
  'Sahu Kumarsneh',
  'Raji Indukuru',
  'Surya Saripalli',
  'Boris Doley',
  'Anant Dubey',
  'Alisha Sahu',
  'Pushparaj Geravubana',
  'Vikyanth Sudhakar',
]))();
