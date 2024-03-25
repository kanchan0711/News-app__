import './App.css';
import React, {Component} from "react"
import Navbar from './Component/Navbar';
import News from './Component/News';
// import SampleOp from './Component/SampleOp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


export default class App extends Component {
  pageSize = 10;
  render() {
    return (
     <div>
      <Router>
        <Navbar/>
        <Routes>
         <Route exact path="/" element={<News pageSize={this.pageSize} country="in"category="general" />} />
         <Route exact path="/business" element={<News pageSize={this.pageSize} country="in"category="business" />} />
         <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in"category="entertainment" />} />
         <Route exact path="/health" element={<News pageSize={this.pageSize} country="in"category="health" />} />
         <Route exact path="/science" element={<News pageSize={this.pageSize} country="in"category="science" />} />
         <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in"category="sports" />} />
         <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in"category="technology" />} />
        
          {/* <Route path="/science"><News pageSize={this.pageSize} country="in" category="science"/></Route>
          <Route path="/business"><News pageSize={this.pageSize} country="in" category="business"/></Route>
          <Route path="/entertainment"><News pageSize={this.pageSize} country="in" category="entertainment"/></Route>
          <Route path="/general"><News pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route path="/health"><News pageSize={this.pageSize} country="in" category="health"/></Route>
          <Route path="/science"><News pageSize={this.pageSize} country="in" category="science"/></Route>
          <Route path="/sports"><News pageSize={this.pageSize} country="in" category="sports"/></Route>
          <Route path="/technology"><News pageSize={this.pageSize} country="in" category="technology"/></Route>  */}
          </Routes>
        </Router>
      </div>
    )
  }
}
