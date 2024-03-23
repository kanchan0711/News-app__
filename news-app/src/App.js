import './App.css';
import React, {Component} from "react"
import Navbar from './Component/Navbar';
import News from './Component/News';
// import SampleOp from './Component/SampleOp';


export default class App extends Component {
  render() {
    return (
     <div>
        <Navbar/>
        <News pageSize={6}/>
       
      </div>
    )
  }
}
