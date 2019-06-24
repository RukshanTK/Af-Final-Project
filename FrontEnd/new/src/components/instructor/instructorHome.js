import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import assManager from '../instructor/assManager';
import viewAll from '../instructor/viewAll';
import addImg from '../instructor/insImg.jpg';

export class instructorHome extends Component{
    viewAll = e => {
       e.preventDefault();
       this.props.history.push(`/viewAll`);
   }
   
   assignmentManager = e => {
    e.preventDefault();
    this.props.history.push(`/assManager`);
   }

   render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Instructor"/>
             
             <br/>
             
             <h4>Welcome to Instructor Page</h4>
             
             <br/>


            <RaisedButton 
            label="View All"
            primary={true}
            styles = {styles.button}
            onClick={this.viewAll}
            />
            <br/><br/>

            <RaisedButton 
            label="Manage Assignment"
            primary={true}
            styles = {styles.button}
            onClick={this.assignmentManager}
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

export default instructorHome