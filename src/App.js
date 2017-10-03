import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as camperActions from './actions/actions'

import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table campers={this.props.campers}
          sortBy={this.props.sortBy}
          sort={this.props.actions.sort} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    campers: state.campers,
    sortBy: state.sortBy
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(camperActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
