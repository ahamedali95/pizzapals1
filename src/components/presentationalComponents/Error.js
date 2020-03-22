import React from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';

const Error = props => {
  return (
    props.alerts.map(alert => {
      return (
        <Message
          color={alert.color}
          data-test='error-component'
          header={alert.header}
          key={uuid()}
          list={alert.list}
        />
      );
    })
  );
};

const mapStateToProps = state => {
  return {
    alerts: state.alerts
  };
};

export default connect(mapStateToProps)(Error);