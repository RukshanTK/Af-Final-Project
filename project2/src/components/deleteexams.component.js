import React,{Component} from "react";
import axios from "axios";


export default class DeleteExams extends Component {

    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            examName: ''
        }

    }

    onSubmit(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/exams/exams/delete/'+this.props.match.params.id)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }


    render() {
        return(
            <div>
                <h3>Delete Exam</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="submit" value="Delete" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}