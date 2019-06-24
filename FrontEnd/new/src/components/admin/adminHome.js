import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import addCourse from '../admin/addCourse';
import addInstructor from '../admin/addInstructor';
import addAdmin from '../admin/addAdmin';
import editCourse from '../admin/editCourse';
import editAdmin from '../admin/editAdmin';
import editInstructor from '../admin/editInstructor';
import addImg from '../admin/adminImage/admin.jpg';

export class adminHome extends Component{
    continueAdmin = e => {
       e.preventDefault();
       this.props.history.push(`/addAdmin`);
   }
   
   continueInstructor = e => {
    e.preventDefault();
    this.props.history.push(`/addInstructor`);
   }

   continueCourse = e => {
    e.preventDefault();
    this.props.history.push(`/addCourse`);
   }

   continueEditAdmin = e => {
    e.preventDefault();
    this.props.history.push(`/editAdmin`);
   }

   continueEditInstructor = e => {
    e.preventDefault();
    this.props.history.push(`/editInstructor`);
   }

   continueEditCourse = e => {
    e.preventDefault();
    this.props.history.push(`/editCourse`);
   }

    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Admin"/>
             
             <br/>
             
             <h4>Welcome to Admin Page</h4>
             
             <br/>


            <RaisedButton 
            label="Add Admin"
            primary={true}
            styles = {styles.button}
            onClick={this.continueAdmin}
            />
            <br/><br/>

            <RaisedButton 
            label="Edit Admin"
            primary={true}
            styles = {styles.button}
            onClick={this.continueEditAdmin}
            />
            <br/><br/>


            <RaisedButton 
            label="Add Instructor"
            primary={true}
            styles = {styles.button}
            onClick={this.continueInstructor}
            />
            <br/><br/>

            <RaisedButton 
            label="Edit Instructor"
            primary={true}
            styles = {styles.button}
            onClick={this.continueEditInstructor}
            />
            <br/><br/>

            <RaisedButton 
            label="Add Course"
            primary={true}
            styles = {styles.button}
            onClick={this.continueCourse}
            />
            <br/>
            <br/>


            <RaisedButton 
            label="Edit Course"
            primary={true}
            styles = {styles.button}
            onClick={this.continueEditCourse}
            />
            <br/><br/>

             <img src={addImg}   />
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

export default adminHome