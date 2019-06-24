import React, {Component} from 'react';
import axios from 'axios';

export default class EditExams extends Component {

    constructor(props) {
        super(props);

        this.onChangeExamSubjectName = this.onChangeExamSubjectName.bind(this);
        this.onChangeExamName = this.onChangeExamName.bind(this);
        this.onChangeExamDate = this.onChangeExamDate.bind(this);
        this.onChangeExamTime = this.onChangeExamTime.bind(this);
        this.onChangeExamGrading = this.onChangeExamGrading.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            examSubjectName: '',
            examName: '',
            examDate: '',
            examTime: '',
            examGrading:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/exams/' +this.props.match.params.id)
            .then(response => {
                this.setState({
                    examSubjectName: response.data.examSubjectName,
                    examName: response.data.examName,
                    examDate: response.data.examDate,
                    examTime: response.data.examTime,
                    examGrading: response.data.examGrading
                })
            }).catch(function (error) {
            console.log(error);
        })
    }

    onChangeExamSubjectName(e){
        this.setState({
            examSubjectName: e.target.value
        })
    }

    onChangeExamName(e){
        this.setState({
            examName: e.target.value
        })
    }

    onChangeExamDate(e){
        this.setState({
            examDate: e.target.value
        })
    }

    onChangeExamTime(e){
        this.setState({
            examTime: e.target.value
        })
    }

    onChangeExamGrading(e){
        this.setState({
            examGrading: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            examSubjectName : this.state.examSubjectName,
            examName : this.state.examName,
            examDate : this.state.examDate,
            examTime : this.state.examTime,
            examGrading: this.state.examGrading
        };

        axios.post('http://localhost:4000/exams/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <h3>Update Exams</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Exam Subject Name : </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.examSubjectName}
                               onChange={this.onChangeExamSubjectName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exam Name : </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.examName}
                               onChange={this.onChangeExamName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exam Date : </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.examDate}
                               onChange={this.onChangeExamDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exam Time : </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.examTime}
                               onChange={this.onChangeExamTime}
                        />
                    </div>
                    <div className="form-group">
                        <label>Exam Grading : </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.examGrading}
                               onChange={this.onChangeExamGrading}
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