import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class viewAll extends Component{
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
            <AppBar title ="Student Details"/>
             
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">StudentNo</th>
      <th scope="col">Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Ashim</td>
      <td>Pandey</td>
      <td>IT17088888</td>
      <td>95</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Diliha</td>
      <td>aaaa</td>
      <td>IT17077777</td>
      <td>85</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ashim</td>
      <td>Pandey</td>
      <td>IT17088888</td>
      <td>95</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Diliha</td>
      <td>aaaa</td>
      <td>IT17077777</td>
      <td>85</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Ashim</td>
      <td>Pandey</td>
      <td>IT17088888</td>
      <td>95</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Diliha</td>
      <td>aaaa</td>
      <td>IT17077777</td>
      <td>85</td>
    </tr>
  </tbody>
</table>
             
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

export default viewAll