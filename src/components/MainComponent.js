import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }

  render() {
    const Homepage = () => {
      return (
        <Home />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={Homepage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to='/home'></Redirect>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
