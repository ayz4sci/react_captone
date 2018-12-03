import React from 'react';
import TextField from 'material-ui/TextField';
import {blueGrey900} from 'material-ui/styles/colors';

class Header extends React.Component{
    render(){
        return (
            <div className="row mt-4 mb-4 mr-1 justify-content-md-center">
                {/* <h2 className="row justify-content-md-center">Git Sheetsheet</h2> */}
                {/* <h2 className="col">Git Cheat Sheet</h2> */}

                <TextField
                    className="col-3"
                    floatingLabelText="Git Cheat Sheet"
                    name="search"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineStyle={styles.underlineStyle}
                    underlineShow="true"
                    />
            </div>
        )
    }
}

const styles = {
    underlineStyle: {
      borderColor: blueGrey900,
      
    },
    floatingLabelStyle: {
      color: blueGrey900,
      fontSize: '26px',

    },
    floatingLabelFocusStyle: {
      color: blueGrey900,
    },
};
export default Header;