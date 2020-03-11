import React from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';

const Error = props => {
  return (
    props.alerts.map(alert => {
      return (
        <Message
          key={uuid()}
          color={alert.color}
          header={alert.header}
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