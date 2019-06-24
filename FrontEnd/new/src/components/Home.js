import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import stu from '../components/img/stu.jpg';
import Login from '../components/Login';

export class Home extends Component{
   continueLogIn = e => {
       e.preventDefault();
       this.props.history.push(`/Login`);
   }
   
   continueSignUp = e => {
    e.preventDefault();
    this.props.history.push(`/SignUp`);
}

    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="CourseWeb"/>
             
             <br/>
             
             <h4>Welcome to CourseWeb System</h4>
             
             <br/>

            <RaisedButton 
            label="LogIn"
            primary={true}
            styles = {styles.button}
            onClick={this.continueLogIn}
            />
            <RaisedButton 
            label="SignUp"
            primary={false}
            styles = {styles.button}
            onClick={this.continueSignUp}
            />
            <br/>
            <br/>


             <img src={stu}   />
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

export default Home