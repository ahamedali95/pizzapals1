import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../presentationalComponents/Header';
import Error from '../presentationalComponents/Error';
import { Form, Segment } from 'semantic-ui-react';
import autoBind from 'react-autobind';
import { addAlert, removeAlert } from '../../actions';
import { getLoginFormAlertsList } from '../../utilities';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      invalidFields: []
    };

    autoBind(this);
  }

  componentWillUnmount() {
    this.props.removeAlert('login-form-invalid-fields-alert');
  }

  onChange(event, { name, value }) {
    this.setState({
      [name]: value
    }, () => console.log(this.state));
  }

  onSubmit(event) {
    event.preventDefault();
    const invalidFields = this.performValidation();

    if (invalidFields.length) {
      this.setState({
        invalidFields
      }, () => {
        this.props.removeAlert('login-form-invalid-fields-alert');
        this.props.addAlert(getLoginFormAlertsList(invalidFields));
      });
    } else {
      this.props.history.push('pizzapals');
    }
  }

  performValidation() {
    const invalidFields = [];

    !this.state.userName && invalidFields.push('userName');
    !this.state.password && invalidFields.push('password');

    return invalidFields;
  }

  render() {
    const { userName, password, invalidFields } = this.state;

    return (
      <div className='container'>
        <div className='col-lg-12 col-md-12'>
          <Header />
          <Error />
          <div className='row justify-content-center'>
            <Segment inverted>
              <Form
                inverted
                onSubmit={this.onSubmit}
              >
                <Form.Group inline>
                  <label className='form-title'>
                    <strong>Login</strong>
                  </label>
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    error={invalidFields.includes('userName')}
                    label='Username'
                    name='userName'
                    placeholder='Username'
                    onChange={this.onChange}
                    size='massive'
                    value={userName}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    error={invalidFields.includes('password')}
                    label='Password'
                    name='password'
                    placeholder='Password'
                    type='password'
                    onChange={this.onChange}
                    size='massive'
                    value={password}
                  />
                </Form.Group>
                <Form.Button
                  className='row justify-content-center'
                  positive
                >
                  Submit
                </Form.Button>
              </Form>
            </Segment>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAlert: value => dispatch(addAlert(value)),
    removeAlert: value => dispatch(removeAlert(value))
  };
};

export default connect(null, mapDispatchToProps)(Login);