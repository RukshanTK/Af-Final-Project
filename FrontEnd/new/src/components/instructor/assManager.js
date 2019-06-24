import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import update from '../instructor/updateMarks';
import view from '../instructor/viewMarks';


export class assManager extends Component{
   ViewMarks = e => {
       e.preventDefault();
       this.props.history.push(`/view`);
   }
   
   continueUpdate = e => {
    e.preventDefault();
    this.props.history.push(`/update`);
    }


    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Assignment Management Pages"/>
             <br/>
             
            <TextField
             hintText = "Student ID"
             name = "uName"
             type="text"
             />
             <br/>
             <br/>


            <RaisedButton 
            label="Update"
            primary={true}
            styles = {styles.button}
            onClick={this.continueUpdate}
            />
            <br/>
            <br/>
            
            <RaisedButton 
            label="View"
            primary={true}
            styles = {styles.button}
            onClick={this.ViewMarks}
            />
            <br/>
            <br/>

            <RaisedButton 
            label="Delete"
            primary={true}
            styles = {styles.button}
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

export default assManager