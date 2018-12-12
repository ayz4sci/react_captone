import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

class UserProfilePage extends React.Component{
    render(){
        return (
            <div className="">
                <div className="row justify-content-md-center">
                    <Icon fontSize="large">person</Icon>
                </div>
                <h4 className="row justify-content-md-center">{this.props.username}</h4>
                <form className="row justify-content-md-center mt-4">
                    <input  
                        type="submit" 
                        className="btn btn-secondary mt-3" 
                        value={this.props.signingOut ? 'Signing Out...' : "Sign Out"}
                        disabled={this.props.signingOut}
                        onClick={this.props.onSignOut}/>
                </form>
            </div>
        )
    }
}

UserProfilePage.propTypes = {
    username: PropTypes.string.isRequired,
    signingOut: PropTypes.bool.isRequired,
    onSignOut: PropTypes.func
}

export default UserProfilePage;