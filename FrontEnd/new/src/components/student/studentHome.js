import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import viewStudent from '../student/viewStudent';
import courses from '../student/courses';
import stu from '../img/stu321.jpg';
import CoursesEnrolled from '../student/coursesEnrolled';

export class studentHome extends Component{
   
    StudentDetails = e => {
    e.preventDefault();
    this.props.history.push(`/viewStudent`);
    }

    viewCourses = e => {
    e.preventDefault();
    this.props.history.push(`/courses`);
    }

    enrollCourse = e => {
        e.preventDefault();
        this.props.history.push(`/CoursesEnrolled`);
        }

    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Welcome to Student Home Page"/>
            <br/>
            <br/>
             
            <RaisedButton 
            label="Student Details"
            primary={true}
            styles = {styles.button}
            onClick={this.StudentDetails}
            />
             <br/>
             <br/>
             <br/>

             <RaisedButton 
            label="View Courses"
            primary={true}
            styles = {styles.button}
            onClick={this.viewCourses}
            />
             <br/>
             <br/>
             <br/>

            <RaisedButton 
            label="Enrolled Courses"
            primary={true}
            styles = {styles.button}
            onClick={this.enrollCourse}
            />
             <br/>
             <br/>
             <br/>
             <br/>
             
            <img src={stu} />
             <br/>

          </React.Fragment>
        </MuiThemeProvider>
      )  
    }
}


const styles = {
    button: {
        margin: 15
    }   
}

export default studentHome