import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

class SearchHeader extends React.Component{
    render(){
        return (
            <div className="row m-4 justify-content-md-center">
                <TextField
                    className="col-3 header"
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
                      }}
                    />
            </div>
        )
    }
}

export default SearchHeader;