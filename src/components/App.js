import React, { Component, PropTypes} from 'react';
import './App.css';
import Board from './Board';
import Header from './Header'
import { connect } from 'react-redux';


class App extends Component {
render(){
const {dispatch, game } = this.props;
console.log(this.props);
  return (
    <div className="">
    <Header />
    <Board />
    </div>
  );
}
}

const mapStateToProps = state => (
  {
    game: state
  }
);
export default connect(mapStateToProps)(App);
