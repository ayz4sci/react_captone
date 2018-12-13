import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

class LoginForm extends React.Component{
    render(){
        return (
            <form>
                <TextInput
                    name="username"
                    label="Username"
                    onChange={this.props.onChange}
                    error={this.props.errors.username}
                    type="text" />
                <TextInput
                    name="password"
                    label="Password"
                    onChange={this.props.onChange}
                    error={this.props.errors.password} 
                    type="password" />
                <span className="row justify-content-md-center">
                    <input  
                        disabled={this.props.loggingIn}
                        type="submit"
                        className="btn btn-primary mr-1" 
                        value={this.props.loading ? 'Entering...' : "Enter"}
                        onClick={this.props.onEnter}/>
                </span>
            </form>
        )
    }
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errors: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onRegister: PropTypes.func,
    onLogin: PropTypes.func,
}

export default LoginForm;