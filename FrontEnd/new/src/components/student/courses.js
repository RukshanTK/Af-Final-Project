import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import uploadAssignment from '../student/uploadAssignment';

export class updateMarks extends Component{
   
   continueAssignment = e => {
    e.preventDefault();
    this.props.history.push(`/uploadAssignment`);
}

    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Courses"/>
             <br/>
             <h4>Select Your Course to upload the assignment</h4>
             <br/>
            <RaisedButton 
            label="AF"
            primary={true}
            styles = {styles.button}
            onClick={this.continueAssignment}
            />
             <br/>
             <br/>
             <br/>

            <RaisedButton 
            label="DS"
            primary={true}
            styles = {styles.button}
            />

             <br/>
             <br/>
             <br/>
             
             <RaisedButton 
            label="ESD"
            primary={true}
            styles = {styles.button}
            />
             <br/>
             <br/>
             <br/>

            <RaisedButton 
            label="DS"
            primary={true}
            styles = {styles.button}
            />  
             <br/>
             <br/>
             <br/>

            <RaisedButton 
            label="SA"
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

export default updateMarks