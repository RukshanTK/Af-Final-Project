import React, {Component} from 'react';
import axios from 'axios';

export default class createCourses extends Component {
    constructor(props) {
        super(props);

        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangelecturerInCharge = this.onChangelecturerInCharge.bind(this);
        this.onChangeCourseHours = this.onChangeCourseHours.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            courseName: '',
            lecturerInCharge: '',
            courseHours: '',
            
        }
    }

    onChangeCourseName(e) {
        this.setState({
            courseName: e.target.value
        });
    }

    onChangelecturerInCharge(e) {
        this.setState({
            lecturerInCharge: e.target.value
        });
    }

    onChangeCourseHours(e) {
        this.setState({
            courseHours: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Course Submitted");
        console.log(`name:${this.state.courseHours}`);

        const Course = {
            courseName: this.state.courseName,
            lecturerInCharge: this.state.lecturerInCharge,
            courseHours: this.state.courseHours,
        }

        axios.post('http://localhost:4001/courseWeb/add', Course)
            .then(res  => console.log(res.data));

        this.setState({
            courseName: '',
            lecturerInCharge: '',
            courseHours: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create Course</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Course Name: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.courseName}
                               onChange={this.onChangeCourseName}
                        />
                    </div>
                    <div className="form-group">
                        <label>lecturer In Charge: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.LecturerInCharge}
                               onChange={this.onChangelecturerInCharge}
                        />
                    </div>
                    <div className="form-group">
                        <label>Course Hours: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.courseHours}
                               onChange={this.onChangeCourseHours}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Course" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}