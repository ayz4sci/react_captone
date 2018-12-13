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
                        value="Sign Out"
                        onClick={this.props.onSignOut}/>
                </form>
            </div>
        )
    }
}

UserProfilePage.propTypes = {
    username: PropTypes.string.isRequired,
    onSignOut: PropTypes.func
}

export default UserProfilePage;