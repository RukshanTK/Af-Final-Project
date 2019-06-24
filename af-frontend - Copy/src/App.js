import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import viewCourses from "./components/view-courses.component";
import createCourses from "./components/create-courses.component";
import editCourses from "./components/edit-courses.component";
import deleteCourses from "./components/delete-courses.component.js";
import logo from "./aaa.jpg";


class App extends Component {
  render(){
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-brand">View Courses</Link>
                        </li>
                        <li>
                    <Link to="/create" className="navbar-brand">Create Courses</Link>
                        </li>
                        
                    </ul>
                </div>
    </nav>
    <img src={logo}></img>
      <Route path = "/" exact component = {viewCourses}/>
      <Route path = "/edit/:id" component = {editCourses}/>
      <Route path = "/create" component = {createCourses}/>
      <Route path = "/delete/:id" component = {deleteCourses}/>
      
    </Router>  
    
    
  );
}
}

export default App;
