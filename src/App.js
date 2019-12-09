import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {setMonsters} from './redux/reducer'
import axios from 'axios'

class App extends React.Component {
 state = {
   pokemon:[]
 }
 componentDidMount(){
   axios.get(`https://pokeapi.co/api/v2/pokemon`).then(res => {
     this.setState({
       pokemon: res.data.results[0]
     })
   })

 }
  render() {
    console.log(this.props)
    return <div className="App">
     <button onClick={() => this.props.setMonsters()}>Get A Monster</button>
    </div>;
  }
}
const mapStateToProps = (reduxState) => {
  return reduxState
}
export default connect(mapStateToProps, {setMonsters})(App);
