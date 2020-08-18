import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import TransactionPage from './components/TransactionPage';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import getWeb3 from './getWeb3';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {web3:null};
  }

  async componentDidMount(){
    var web3Ins = await getWeb3();
    this.setState({web3: web3Ins});
  }
  render(){
    var page = 
    <div>
      <BrowserRouter>
      <Switch>
        <Route path='/home' component = {() => <HomePage web3 = {this.state.web3}/> } name="homepage"></Route>
        <Route path='/profile/:address' component = {(props) => <ProfilePage web3 = {this.state.web3} {...props}/> } name="profilepage"></Route>
        <Route path='/transaction/:txHash' exact component = {(props) => <TransactionPage web3 = {this.state.web3} {...props}/> } name="profilepage"></Route>
        <Route from='/'><Redirect from="" to="/home"/></Route>
      </Switch>
      </BrowserRouter>
    </div>;
    return page;
    //return <div>Waiting for web3!</div>
  }
}

export default App;
