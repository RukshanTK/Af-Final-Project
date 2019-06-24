import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class viewMarks extends Component{
   
   continueSignUp = e => {
    e.preventDefault();
    this.props.history.push(`/SignUp`);
}

    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Update Marks"/>
             
             
            <RaisedButton 
            label="Marks"
            primary={false}
            styles = {styles.button}
            />


             <TextField
             hintText = "88"
             name = "marks"
             type="text"
             />
             <br/>
             <br/>
             
             <RaisedButton 
            label="Back"
            primary={true}
            styles = {styles.button}
            />

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

export default viewMarks