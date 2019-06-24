import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {FormGroup,Table,Button} from 'reactstrap'
import axios from 'axios';

const Assignment = props => (
    <tr>
        <td>{props.assign.assignmentName}</td>
        <td>{props.assign.assignmentCreateDate}</td>
        <td>{props.assign.assignmentDueDate}</td>
        <td>{props.assign.assignmentGrading}</td>
        <td>
            <Link to={"/edit/"+props.assign._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/delete/"+props.assign._id}>Delete</Link>
        </td>
    </tr>
)

export default class MyAssignments extends Component {

    constructor(props){
        super(props);
        this.state = {Assignments: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api')
            .then(response => {
                this.setState({Assignments: response.data});
            }).catch(function (error) {
            console.log(error);
        })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/api')
            .then(response => {
                this.setState({Assignments: response.data});
            }).catch(function (error) {
            console.log(error);
        })
    }

    assignmentList(){
        return this.state.Assignments.map(function (current, i) {
            return <Assignment assign = {current} key={i} />
        })
    }

    render(){
        return(
            <div>
                <h3>Assignments</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                   <thead>
                    <tr>
                        <th>Assignment Name</th>
                        <th>Assignment Create Date</th>
                        <th>Assignment Due Date</th>
                        <th>Assignment Grading Status</th>
                    </tr>
                   </thead>
                    <tbody>
                        {this.assignmentList()}
                    </tbody>
                </table>
            </div>
        )
    }
}