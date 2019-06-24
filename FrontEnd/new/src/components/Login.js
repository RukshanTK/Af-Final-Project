import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


export default class Login extends Component{
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Form Submitted");

        const newAssignment = {
            email: this.state.email,
            password: this.state.password
        }


        console.log(newAssignment)
        axios.post('http://localhost:4000/api/login', newAssignment)
        .then(res  => console.log(res.data));

        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (

        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Login"/>
                <br/>

            <div style={{marginTop: 20}}>
                <form onSubmit={this.onSubmit}>

                <TextField
                hintText = "Email"
                type="text"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
                <br/>
                <br/>

                <TextField
                hintText = "Password"
                type="text"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
                <br/>
                <br/>

                <RaisedButton 
                     label="Create Account"
                     primary={true}
                     type="submit"
                     />

                    {/* <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text"
                               className='form-control'
                               value={this.state.password}
                               onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Account" className="btn btn-primary"/>
                    </div> */}

                    

                </form>
            </div>

            </React.Fragment>
        </MuiThemeProvider>
        )
    }
}