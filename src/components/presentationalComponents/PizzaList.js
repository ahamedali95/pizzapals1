import React from 'react';
import { Loader, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Pizza from './Pizza';

const PizzaList = props => {
  console.log("pizzalist");
  return (
    <div
      className='mt-3'
      data-test='pizza-list-component'
    >
      <Segment inverted>
        <Loader active={props.isPizzaLoaderShown} />
        {
          props.pizzas.length ?
            <div className='ui three doubling stackable cards'>
              {
                props.pizzas.map((pizzaObj, idx) => {
                  return <Pizza key={idx} pizza={pizzaObj}/>
                })
              }
            </div>
            :
            null
        }
      </Segment>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    isPizzaLoaderShown: state.isPizzaLoaderShown
  };
};

export default connect(mapStateToProps)(PizzaList);
