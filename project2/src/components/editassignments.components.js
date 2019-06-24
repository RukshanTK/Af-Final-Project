import React, {Component} from 'react';
import axios from 'axios';


export default class EditAssignments extends Component {

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

    componentDidMount() {
        axios.get('http://localhost:4000/api/' +this.props.match.params.id)
            .then(response => {
                this.setState({
                    assignmentName: response.data.assignmentName,
                    assignmentCreateDate: response.data.assignmentCreateDate,
                    assignmentDueDate: response.data.assignmentDueDate,
                    assignmentGrading: response.data.assignmentGrading
                })
            }).catch(function (error) {
            console.log(error);
        })
    }

    onChangeAssignmentName(e){
        this.setState({
            assignmentName: e.target.value
        })
    }

    onChangeAssignmentCreateDate(e){
        this.setState({
            assignmentCreateDate: e.target.value
        })
    }

    onChangeAssignmentDueDate(e){
        this.setState({
            assignmentDueDate: e.target.value
        })
    }

    onChangeAssignmentGrading(e){
        this.setState({
            assignmentGrading: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            assignmentName : this.state.assignmentName,
            assignmentCreateDate: this.state.assignmentCreateDate,
            assignmentDueDate: this.state.assignmentDueDate,
            assignmentGrading: this.state.assignmentGrading
        };

        axios.post('http://localhost:4000/api/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Assignment</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Assignment Name : </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.assignmentName}
                                onChange={this.onChangeAssignmentName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Assignment Create Date : </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.assignmentCreateDate}
                               onChange={this.onChangeAssignmentCreateDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Assignment Due Date : </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.assignmentDueDate}
                               onChange={this.onChangeAssignmentDueDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Assignment Grading : </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.assignmentGrading}
                               onChange={this.onChangeAssignmentGrading}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}