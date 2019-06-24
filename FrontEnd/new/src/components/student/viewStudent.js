import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


const Students = props => (
    <tr>
        <td>{props.assign.name}</td>
        <td>{props.assign.email}</td>
        <td>{props.assign.userType}</td>
    </tr>
)

export default class viewStudent extends Component {

    constructor(props){
        super(props);
        this.state = {Courses: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/Student')
            .then(response => {
                this.setState({Courses: response.data});
            }).catch(function (error) {
            console.log(error);
        })
    }


    courseList(){
        return this.state.Courses.map(function (current, i) {
            return <Students assign = {current} key={i} />
        })
    }

    render(){
        return(
            <MuiThemeProvider>  
                <React.Fragment>
                <AppBar title ="Student Details"/>
                <br/>

            <div>
                <table className="table table-striped" style={{marginTop: 20}}>
                   <thead>
                    <tr>
                        <th>Names</th>
                        <th>Email</th>
                        <th>User Type</th>
                    </tr>
                   </thead>
                    <tbody>
                        {this.courseList()}
                    </tbody>
                </table>
            </div>

            </React.Fragment>
        </MuiThemeProvider>
        )
    }
}