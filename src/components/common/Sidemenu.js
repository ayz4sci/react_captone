import React from 'react';
import PropTypes from 'prop-types';
import BurgerMenu from 'react-burger-menu';
import LoginForm from '../authentication/Login';
import './Sidemenu.css';
import UserProfilePage from '../authentication/UserProfilePage';

class Sidemenu extends React.Component{
    Menu = BurgerMenu['slide'];

    state = {
        errors: {},
        username: "",
        password: "",
        loggingIn: false,
        registering: false,
        signingOut: false
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    onLogin = (e) => {
        e.preventDefault();
        if(!this.formIsValid()) return;
    }

    onRegister = (e) => {
        e.preventDefault();
        if(!this.formIsValid()) return;
    }

    onSignOut = (e) => {
        e.preventDefault();
        if(!this.formIsValid()) return;
        this.setState({loggedIn: false});
    }

    formIsValid = () => {
        let formIsValid = true;
        let errors = {};

        if(this.state.username.length < 5){
            errors.username = 'Username must be at least 5 characters.';
            formIsValid = false;
        } else if(this.state.password.length < 5){
            errors.password = 'Password must be at least 5 characters.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    render(){
        return (
            <this.Menu 
                pageWrapId={ "page-wrap" } 
                outerContainerId={ "outer-container" } 
                slide="true">
                { !this.state.user ? 
                    <LoginForm 
                        {...this.state}
                        onChange={this.onChange}
                        onLogin={this.onLogin}
                        onRegister={this.onRegister}/>
                    :
                    <UserProfilePage 
                        username={this.state.username}
                        onSignOut={this.onSignOut} 
                        signingOut={this.state.signingOut}/>
                }
            </this.Menu>
        )
    }
}
Sidemenu.propTypes = {
    userActions: PropTypes.object,
    user: PropTypes.object
}
export default Sidemenu;