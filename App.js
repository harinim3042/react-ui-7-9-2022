import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './Login/Components';
import Dashboard from './Dashboard';
import {
  getProducts,
  getUser,
  getLogout,
  removeProductItem,
  addProductItem,
} from './services';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    let isActive = JSON.parse(sessionStorage.getItem('users'));
    if (isActive) {
      this.props.getUser();
      this.props.getProducts();
    }
  }

  signIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
      },
    });
    var user = { email: email, password: password };
    sessionStorage.setItem('users', JSON.stringify(user));
    this.props.getUser();
    this.props.getProducts();
  };

  signOut = () => {
    this.setState({ user: null });
    this.props.getLogout();
    sessionStorage.clear();
  };

  handleDelete = (id) => {
    this.props.removeProductItem(id);
  };

  handleAddItem = (values) => {
    this.props.addProductItem(values);
  };

  render() {
    const isLogin = JSON.parse(sessionStorage.getItem('users'));

    return (
      <Router>
        {!isLogin ? (
          <Route
            exact
            path="/"
            component={(props) => (
              <LoginForm
                onSignIn={this.signIn}
                getLogin={this.props.getUser}
                {...props}
              />
            )}
          />
        ) : (
          <Route
            path="/"
            component={(props) => (
              <Dashboard
                products={this.props.product}
                user={isLogin}
                onSignOut={this.signOut}
                handleDelete={this.handleDelete}
                handleAddItem={this.handleAddItem}
                {...props}
              />
            )}
          />
        )}
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    getUser: () => dispatch(getUser()),
    getLogout: () => dispatch(getLogout()),
    removeProductItem: (id) => dispatch(removeProductItem(id)),
    addProductItem: (data) => dispatch(addProductItem(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    product: state.dashboard,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
