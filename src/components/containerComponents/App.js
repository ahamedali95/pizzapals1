import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../presentationalComponents/Header';
import NewPizzaForm from '../presentationalComponents/NewPizzaForm';
import PizzaList from '../presentationalComponents/PizzaList';
import { setPizzas, setIsPizzaLoaderShown, addAlert } from '../../actions/index.js';
import { pizzaFetchFailureAlert } from '../../constants';
import getPizzas from '../../services/getPizzas';
import Error from '../presentationalComponents/Error';

class App extends Component {
  componentDidMount() {
    this.prePizzaFetchProcess();
  }

  prePizzaFetchProcess() {
    this.props.setIsPizzaLoaderShown(true);
    this.getPizzas();
  }

  async getPizzas() {
    const data = await getPizzas();
    this.postPizzaFetchProcess(data);
  }

  postPizzaFetchProcess(data) {
    if (data) {
      this.props.setIsPizzaLoaderShown(false);
      const sortedPizzasByCreatedTime = data.sort((pizza1, pizza2) => new Date(pizza2.createdTime) - new Date(pizza1.createdTime));
      this.props.setPizzas(sortedPizzasByCreatedTime);
    } else {
      this.props.setIsPizzaLoaderShown(false);
      this.props.addAlert(pizzaFetchFailureAlert);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='col-lg-12 col-md-12'>
          <Header />
          <Error />
          <NewPizzaForm history={this.props.history} />
          <PizzaList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: data => (dispatch(setPizzas(data))),
    setIsPizzaLoaderShown: value => dispatch(setIsPizzaLoaderShown(value)),
    addAlert: value => dispatch(addAlert(value))
  };
};

export default connect(null, mapDispatchToProps)(App);