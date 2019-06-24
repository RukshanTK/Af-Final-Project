import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {FormGroup,Table,Button} from 'reactstrap'
import axios from 'axios';

const Exam = props => (
    <tr>
        <td>{props.assign.examSubjectName}</td>
        <td>{props.assign.examName}</td>
        <td>{props.assign.examDate}</td>
        <td>{props.assign.examTime}</td>
        <td>{props.assign.examGrading}</td>
        <td>
            <Link to={"/exams/edit/"+props.assign._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/exams/delete/"+props.assign._id}>Delete</Link>
        </td>
    </tr>
)

export default class MyExams extends Component {
    constructor(props){
        super(props);
        this.state = {Exams: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/exams/')
            .then(response => {
                this.setState({Exams: response.data});
            }).catch(function (error) {
            console.log(error);
        })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/exams/')
            .then(response => {
                this.setState({Exams: response.data});
            }).catch(function (error) {
            console.log(error);
        })
    }

    examList(){
        return this.state.Exams.map(function (current, i) {
            return <Exam assign = {current} key={i} />
        })
    }

    render(){
        return(
            <div>
                <h3>Exams</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Exam Subject Name</th>
                        <th>Exam Name</th>
                        <th>Exam Date</th>
                        <th>Exam Time</th>
                        <th>Exam Grading</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.examList()}
                    </tbody>
                </table>
            </div>
        )
    }
}