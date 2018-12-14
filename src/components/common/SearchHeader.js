import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import LoadingDots from './LoadingDots'

class SearchHeader extends React.Component{
    render(){
        return (
            // 
            <div className="row justify-content-md-center">
                <span className="col-4 m-4 header">
                    <TextField
                        id="search"
                        label="Git Cheat Sheet"
                        variant="outlined"
                        onChange={this.props.onSearchChange}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
                            ),
                        }} />
                    {  this.props.loading && <LoadingDots className="m-1" interval={400} dots={4} /> }
                </span>
            </div>
        )
    }
}

SearchHeader.propType = {
    loading: PropTypes.bool.isRequired,
    onSearchChange: PropTypes.func.isRequired
}

export default SearchHeader;