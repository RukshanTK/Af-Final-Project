import React, {Component} from 'react';
import axios from 'axios';

export default class DeleteCourses extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
           courseName: ''
        }

    }

    onSubmit(e){
        console.log("Course deleted");
        
        e.preventDefault();
        console.log("")
        axios.delete('http://localhost:4001/courseWeb/delete/'+this.props.match.params.id)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }


    render() {
        return(
            <div>
                <h3>Delete Course</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="submit" value="Delete" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        )
    }
}