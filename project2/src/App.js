import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import MyAssignments from "./components/myassignments.components";
import CreateAssignments from './components/createassignments.components';
import EditAssignments from "./components/editassignments.components";
import MyExams from "./components/myexams.component";
import EditExams from "./components/editexams.component";
import CreateExams from "./components/createexams.component";
import DeleteAssignment from "./components/deleteassignments.component";
import DeleteExams from "./components/deleteexams.component";
import SearchAssignment from "./components/searchassignments.component";
import Instructor from "./components/Instructor";


function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-brand">My Assignments</Link>
                        </li>
                        <li>
                    <Link to="/create" className="navbar-brand">Create Assignments</Link>
                        </li>
                        <li>
                            <Link to="/search" className="navbar-brand">Search Assignment</Link>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/exam/" className="navbar-brand">My Exams</Link>
                        </li>
                        <li>
                            <Link to="/exams/create" className="navbar-brand">Create Exams</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <h2 align="center">Assignments & Exams</h2>
            </div>
            <Route path="/" exact component={MyAssignments}/>
            <Route path="/edit/:id" component={EditAssignments}/>
            <Route path="/create" component={CreateAssignments}/>
            <Route path="/delete/:id" component={DeleteAssignment}/>
            <Route path="/exam/" component={MyExams}/>
            <Route path="/exams/edit/:id" component={EditExams}/>
            <Route path="/exams/create" component={CreateExams}/>
            <Route path="/exams/delete/:id" component={DeleteExams}/>
            <Route path="/search" component={SearchAssignment}/>
            <Route path="/instructor" component={Instructor}/>
        </Router>
    );
}

export default App;
