import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class CreateAssignments extends Component {
    constructor(props) {
        super(props);

        this.onChangeAssignmentName = this.onChangeAssignmentName.bind(this);
        this.onChangeAssignmentNIC = this.onChangeAssignmentNIC.bind(this);
        this.onChangeAssignmentContact = this.onChangeAssignmentContact.bind(this);
        this.onChangeAssignmentEmail = this.onChangeAssignmentEmail.bind(this);
        this.onChangeAssignmentPassword = this.onChangeAssignmentPassword.bind(this);
        this.onChangeAssignmentUserType = this.onChangeAssignmentUserType.bind(this);
        this.onChangeAssignmentCourseFollowing = this.onChangeAssignmentCourseFollowing.bind(this);
        this.onChangeAssignmentCourseAssigned = this.onChangeAssignmentCourseAssigned.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            NIC: '',
            contact: '',
            email: '',
            password:'',
            userType:'',
            courseFollowing:'',
            courseAssigned:''
        }
    }

    onChangeAssignmentName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAssignmentNIC(e) {
        this.setState({
            NIC: e.target.value
        });
    }

    onChangeAssignmentContact(e) {
        this.setState({
            contact: e.target.value
        });
    }

    onChangeAssignmentEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeAssignmentPassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeAssignmentUserType(e) {
        this.setState({
            userType: e.target.value
        });
    }

    onChangeAssignmentCourseFollowing(e) {
        this.setState({
            courseFollowing: e.target.value
        });
    }

    onChangeAssignmentCourseAssigned(e) {
        this.setState({
            courseAssigned: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Form Submitted");

        const newAssignment = {
            name: this.state.name,
            NIC: this.state.NIC,
            contact: this.state.contact,
            email: this.state.email,
            password:this.state.password,
            userType:this.state.userType,
            courseFollowing:this.state.courseFollowing,
            courseAssigned:this.state.courseAssigned
        }

        axios.post('http://localhost:4000/api/assignments/add', newAssignment)
            .then(res  => console.log(res.data));

        this.setState({

            name: '',
            NIC: '',
            contact: '',
            email: '',
            password:'',
            userType:'',
            courseFollowing:'',
            courseAssigned:''

        })
    }

    render() {
        return (
        <MuiThemeProvider>  
            <React.Fragment>
                <AppBar title ="Enter Your Details to Sign Up"/>
                <br/>

            <div style={{marginTop: 20}}>
                <form onSubmit={this.onSubmit}>

                <TextField
                hintText = "Enter your Name"
                type="text"
                value={this.state.name}
                onChange={this.onChangeAssignmentName}
                />
                <br/>
                <br/>

                <TextField
                hintText = "Enter your NIC"
                type="text"
                value={this.state.NIC}
                onChange={this.onChangeAssignmentNIC}
                />
                <br/>
                <br/>

                <TextField
                hintText = "Contact"
                type="text"
                value={this.state.contact}
                onChange={this.onChangeAssignmentContact}
                />
                <br/>
                <br/>

                <TextField
                hintText = "Email"
                type="text"
                value={this.state.email}
                onChange={this.onChangeAssignmentEmail}
                />
                <br/>
                <br/>

                <TextField
                hintText = "Password"
                type="text"
                value={this.state.password}
                onChange={this.onChangeAssignmentPassword}
                />
                <br/>
                <br/>

                <TextField
                hintText = "Admin/Instructor/Student"
                type="text"
                value={this.state.userType}
                onChange={this.onChangeAssignmentUserType}
                />
                <br/>
                <br/>

                <TextField
                hintText = "Course Following"
                type="text"
                value={this.state.courseFollowing}
                onChange={this.onChangeAssignmentCourseFollowing}
                />
                <br/>
                <br/>

                <TextField
                hintText = "Course Assigned"
                type="text"
                value={this.state.courseAssigned}
                onChange={this.onChangeAssignmentCourseAssigned}
                />

{/*  
                         <div className="form-group">
                             <label>Name:&emsp;&emsp;&emsp;&emsp; </label>
                             <input type="text"
                                    className='form-control'
                                    value={this.state.name}
                                onChange={this.onChangeAssignmentName}
                             />
                             </div> 

                    <div className="form-group">
                        <label>NIC:&emsp;&emsp;&emsp;&emsp;&emsp; </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.NIC}
                               onChange={this.onChangeAssignmentNIC}
                        />
                    </div>

                    <div className="form-group">
                        <label>Contact:&emsp;&emsp;&emsp; </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.contact}
                               onChange={this.onChangeAssignmentContact}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:&emsp;&emsp;&emsp;&emsp; </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.email}
                               onChange={this.onChangeAssignmentEmail}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password:&emsp;&emsp;&emsp; </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.password}
                               onChange={this.onChangeAssignmentPassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Type:&emsp;&emsp;&emsp; </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.userType}
                               onChange={this.onChangeAssignmentUserType}
                        />
                    </div>

                    <div className="form-group">
                        <label>Course Following: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.courseFollowing}
                               onChange={this.onChangeAssignmentCourseFollowing}
                        />
                    </div>
                    <div className="form-group">
                        <label>Course Assigned: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.courseAssigned}
                               onChange={this.onChangeAssignmentCourseAssigned}
                        />
                    </div> */}

                        <br/>


                        <RaisedButton 
                            label="Sign Up"
                            primary={true}
                            type="submit"
                        />

                    {/* <div className="form-group">
                        <input type="submit" value="Sign Up" className="btn btn-primary"/>
                    </div> */}
                </form>
            </div>

            </React.Fragment>
        </MuiThemeProvider>
        )
    }
}