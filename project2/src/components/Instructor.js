import React, {Component} from 'react';
import {BrowserRouter as Route, Router, Link} from "react-router-dom";
import axios from 'axios';
import {FormGroup, Table, Button} from 'reactstrap';
import MyAssignments from "./myassignments.components";
import EditAssignments from "./editassignments.components";
import CreateAssignments from "./createassignments.components";
import DeleteAssignment from "./deleteassignments.component";
import MyExams from "./myexams.component";
import EditExams from "./editexams.component";
import CreateExams from "./createexams.component";
import DeleteExams from "./deleteexams.component";
import SearchAssignment from "./searchassignments.component";


export default class Instructor extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Instructor Home Page</h1>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="navbar-brand">Assignments and Exams</Link>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>

            </Router>
    )
    }
    }
