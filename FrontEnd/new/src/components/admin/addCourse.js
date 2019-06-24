import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RadioGroup, { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';


export class addCourse extends Component{
   
   continueSignUp = e => {
    e.preventDefault();
    this.props.history.push(`/SignUp`);
}

    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Add Course "/>
             
             
            <TextField
             hintText = "Course Name"
             name = "name"
             type="text"
             />
             <br/>

             <TextField
             hintText = "Lecture Incharge"
             name = "nic"
             type="text"
             />
             <br/>

             <TextField
             hintText = "Course Hours"
             name = "contact"
             type="text"
             />
             <br/>

            <RaisedButton 
            label="Add Instructor"
            primary={true}
            styles = {styles.button}
            onClick={this.continueLogIn}
            />
            <br/>
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

export default addCourse