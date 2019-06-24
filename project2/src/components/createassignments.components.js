import React, {Component} from 'react';
import axios from 'axios';
import {FormGroup,Table,Button} from 'reactstrap';

export default class CreateAssignments extends Component {
    constructor(props) {
        super(props);

        this.onChangeAssignmentName = this.onChangeAssignmentName.bind(this);
        this.onChangeAssignmentCreateDate = this.onChangeAssignmentCreateDate.bind(this);
        this.onChangeAssignmentDueDate = this.onChangeAssignmentDueDate.bind(this);
        this.onChangeAssignmentGrading = this.onChangeAssignmentGrading.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            assignmentName: '',
            assignmentCreateDate: '',
            assignmentDueDate: '',
            assignmentGrading: false
        }
    }

    onChangeAssignmentName(e) {
        this.setState({
            assignmentName: e.target.value
        });
    }

    onChangeAssignmentCreateDate(e) {
        this.setState({
            assignmentCreateDate: e.target.value
        });
    }

    onChangeAssignmentDueDate(e) {
        this.setState({
            assignmentDueDate: e.target.value
        });
    }

    onChangeAssignmentGrading(e) {
        this.setState({
            assignmentGrading: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Form Submitted");

        const newAssignment = {
            assignmentName: this.state.assignmentName,
            assignmentCreateDate: this.state.assignmentCreateDate,
            assignmentDueDate: this.state.assignmentDueDate,
            assignmentGrading: this.state.assignmentGrading
        }

        axios.post('http://localhost:4000/api/assignments/add', newAssignment)
            .then(res  => console.log(res.data));

        this.setState({
            assignmentName: '',
            assignmentCreateDate: '',
            assignmentDueDate: '',
            assignmentGrading: false
        })
    }
//onSubmit={this.onSubmit}
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create Assignment</h3>
                <form >
                    <div className="form-group">
                        <label>Assignment Name: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.assignmentName}
                               onChange={this.onChangeAssignmentName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Assignment Create Date: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.assignmentCreateDate}
                               onChange={this.onChangeAssignmentCreateDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Assignment Due Date: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.assignmentDueDate}
                               onChange={this.onChangeAssignmentDueDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Assignment Status: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.assignmentGrading}
                               onChange={this.onChangeAssignmentGrading}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Assignment" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}