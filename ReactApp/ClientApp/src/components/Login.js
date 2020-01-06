import React, {Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logIn } from '../store/Login';
const InitialState = { UserName: "", Password: "" };
class LogIn extends Component {
    constructor(props) {        
        super(props);
        this.state = {
            ...InitialState
        }
        
        
    }
   
    render() {
        return (
            <div>
                <h1>LogIn</h1>                
                <div className="form-group">
                    <label htmlFor="Username">User name</label>
                    <input
                        value={this.state.UserName}
                        type="text"
                        className="form-control col-md-6"
                        id="Username"
                        onChange={this.onUserNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input
                        value={this.state.Password}
                        type="Password"
                        className="form-control col-md-6"
                        id="Password"
                    onChange={this.onPasswordChange}
                    />
                </div>                                                
                <button className="btn btn-primary" onClick={this.onLogIn}>Login</button><br/>
                {this.props.success && (<span className="form-group">Login succedded</span>)}
                {!this.props.success && this.props.success != null && (<span className="form-group">Login Failed!</span>)}
            </div>
            )
    }
    onPasswordChange = (event) => {        
        this.setState({ Password: event.target.value });
    }
    onUserNameChange = (event) => {        
        this.setState({ UserName: event.target.value });
    }
    onLogIn = () => {
        this.props.actions.logIn(this.state.UserName, this.state.Password);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                logIn                
            },
            dispatch
        )
    };
};


export default connect(
    state => state.login,
    mapDispatchToProps
)(LogIn);
