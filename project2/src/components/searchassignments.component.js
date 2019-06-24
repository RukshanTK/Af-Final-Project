import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {FormGroup,Table,Button} from 'reactstrap'
import axios from 'axios';


export default class SearchAssignments extends Component {

    constructor(props){
        super(props);

        this.onChangeAssignmentName = this.onChangeAssignmentName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            assignmentName: ''
        }

    }

    onChangeAssignmentName(e) {
        this.setState({
            assignmentName: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        axios.get('http://localhost:4000/api/'+this.props.match.params.assignmentName)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }


    render() {
        return(
            <div>
                <h3>Search Exams</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Search Assignment: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.assignmentName}
                               onChange={this.onChangeAssignmentName}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}