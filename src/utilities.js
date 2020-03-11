export const getPizzaFormAlertsList = fields => {
  const $fields = ['ingredient1', 'ingredient2', 'name', 'style', 'creator'];
  const alertList = fields.map(field => {
    if ($fields.includes(field)) {
      return `${field[0].toUpperCase()}${field.slice(1)} field should include at least one character and should not exceed 50 characters.`;
    } else {
      return `${field[0].toUpperCase()}${field.slice(1)} field should include at least one character and should not exceed 2083 characters.`;
    }
  });

  return {
    id: 'pizza-form-invalid-fields-alert',
    color: 'red',
    header: 'There was some errors with your submission',
    list: alertList
  };
};

export const getLoginFormAlertsList = fields => {
  const alertList = fields.map(field => `${field[0].toUpperCase()}${field.slice(1)} field cannot be empty.`);

  return {
    id: 'login-form-invalid-fields-alert',
    color: 'red',
    header: 'There was some errors with your submission',
    list: alertList
  };
};