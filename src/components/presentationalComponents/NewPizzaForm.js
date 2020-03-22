import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment } from 'semantic-ui-react';
import autoBind from 'react-autobind';
import { addPizza, addAlert, removeAlert } from '../../actions/index.js';
import { employees, pizzaSubmissionSuccessAlert, pizzaSubmissionFailureAlert, logoutSuccessAlert } from '../../constants';
import { getPizzaFormAlertsList } from '../../utilities';
import createPizza from '../../services/createPizza';

class NewPizzaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaderShown: false,
      pizza: {
        ingredient1: '',
        ingredient2: '',
        name: '',
        style: '',
        creator: '',
        imageURL: ''
      },
      invalidFields: []
    };

    autoBind(this);
  }

  componentWillUnmount() {
   this.props.addAlert(logoutSuccessAlert);
  }

  onClick() {
    this.props.history.push('logout');
  }

  onChange(event, { name, value }) {
    this.setState(prevState => {
      return {
        pizza: {
          ...prevState.pizza,
          [name]: value
        }
      };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const invalidFields = this.performValidation();

    if (invalidFields.length) {
      this.setState({ invalidFields }, () => {
        this.props.removeAlert('pizza-form-invalid-fields-alert');
        this.props.removeAlert('pizza-submission-success-alert');
        this.props.removeAlert('pizza-submission-failure-alert');
        this.props.addAlert(getPizzaFormAlertsList(invalidFields));
      });
    } else {
      this.props.removeAlert('pizza-form-invalid-fields-alert');
      this.props.removeAlert('pizza-submission-success-alert');
      this.props.removeAlert('pizza-submission-failure-alert');
      this.prePizzaCreationProcess();
    }
  }

  performValidation() {
    const invalidFields = [];
    const { pizza } = this.state;
    const fields = ['ingredient1', 'ingredient2', 'name', 'style', 'creator'];

    for (const key in pizza) {
      const value = pizza[key];

      if (fields.includes(key) && (!value || value.length > 50)) {
        invalidFields.push(key);
      } else if (key === 'imageURL' && (!value || value.length > 2083)) {
        invalidFields.push(key);
      }
    }

    return invalidFields;
  }

  handleLoaderToggle(callback, callbackArgs) {
    this.setState(prevState => ({ isLoaderShown: !prevState.isLoaderShown }), () => callback(callbackArgs));
  }

  prePizzaCreationProcess() {
    this.handleLoaderToggle(this.createPizza);
  }

  async createPizza() {
    const { pizza } = this.state;

    const formattedData = {
      name: pizza.name,
      style: pizza.style,
      creator: pizza.creator,
      imageURL: pizza.imageURL,
      ingredients: [{ name: pizza.ingredient1 }, { name: pizza.ingredient2 }]
    };
    const data = await createPizza(formattedData);
    this.handleLoaderToggle(this.postPizzaCreationProcess, data);
  }

  postPizzaCreationProcess(data) {
    if (data) {
      this.props.addAlert(pizzaSubmissionSuccessAlert);
      this.props.addPizza(data);
      this.clearForm();
      setTimeout(() => this.props.removeAlert('pizza-submission-success-alert'), 3000);
    } else {
      this.props.addAlert(pizzaSubmissionFailureAlert);
    }
  }

  clearForm() {
    this.setState({
      pizza: {
        ingredient1: '',
        ingredient2: '',
        name: '',
        style: '',
        creator: '',
        imageURL: ''
      },
      invalidFields: []
    });
  }

  static generateOptions() {
    return employees.map((employeeName, idx) => ({key: idx, value: employeeName, text: employeeName}));
  }

  render() {
    const { isLoaderShown, pizza, invalidFields } = this.state;

    return (
      <>
        <div className='row'>
          <div className="col-2 offset-10">
            <Form.Button
              className='logout-button'
              data-test='logout-button'
              negative
              onClick={this.onClick}
            >
              Log out
            </Form.Button>
          </div>
        </div>
        <Segment inverted>
          <Form
            inverted
            loading={isLoaderShown}
            onSubmit={this.onSubmit}
          >
            <Form.Group inline>
              <label className='form-title'>
                <strong>Create a Pizza</strong>
              </label>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                data-test='homepage-ingredient-1-input'
                error={invalidFields.includes("ingredient1")}
                fluid
                label='Ingredient Name'
                name='ingredient1'
                placeholder='First Ingredient'
                onChange={this.onChange}
                value={pizza.ingredient1}
              />
              <Form.Input
                data-test='homepage-ingredient-2-input'
                error={invalidFields.includes("ingredient2")}
                fluid
                label='Ingredient Name'
                name='ingredient2'
                placeholder='Second Ingredient'
                onChange={this.onChange}
                value={pizza.ingredient2}
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                data-test='homepage-pizza-name-input'
                error={invalidFields.includes("name")}
                fluid
                label='Name'
                name='name'
                placeholder='Name'
                onChange={this.onChange}
                value={pizza.name}
              />
              <Form.Input
                data-test='homepage-pizza-style-input'
                error={invalidFields.includes("style")}
                fluid
                label='Style'
                name='style'
                placeholder='Style'
                onChange={this.onChange}
                value={pizza.style}
              />
              <Form.Field
                data-test='homepage-pizza-creator-input'
                error={invalidFields.includes("creator")}
                fluid
                control={Form.Select}
                label='Creator'
                name='creator'
                placeholder='Creator'
                value={pizza.creator}
                options={NewPizzaForm.generateOptions()}
                onChange={(event, { name, value }) => this.onChange(event, { name, value })}
              />
              <Form.Input
                data-test='homepage-pizza-image-url-input'
                error={invalidFields.includes("imageURL")}
                fluid
                label='image URL'
                name='imageURL'
                placeholder='Image URL'
                onChange={this.onChange}
                value={pizza.imageURL}
              />
            </Form.Group>
            <Form.Button
              data-test='homepage-submit-button'
              disabled={isLoaderShown}
              positive
            >
              Add Pizza
            </Form.Button>
          </Form>
        </Segment>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPizza: (data) => (dispatch(addPizza(data))),
    addAlert: value => dispatch(addAlert(value)),
    removeAlert: value => dispatch(removeAlert(value))
  };
};

export default connect(null, mapDispatchToProps)(NewPizzaForm);
