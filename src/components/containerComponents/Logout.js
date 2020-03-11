import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import autoBind from 'react-autobind';
import { removeAlert } from '../../actions';
import Error from '../presentationalComponents/Error';
import Header from '../presentationalComponents/Header';

class Logout extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  componentWillUnmount() {
    this.props.removeAlert('logout-success-alert');
  }

  onClick() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className='container'>
        <div className='col-lg-12 col-md-12'>
          <Header />
          <Error />
          <Form.Button
            content='Login again'
            icon='left arrow'
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeAlert: value => dispatch(removeAlert(value))
  };
};

export default connect(null, mapDispatchToProps)(Logout);