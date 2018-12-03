import React from 'react';
import PropTypes from 'prop-types';
import ClipboardEnabledText from '../utils/ClipboardEnabledText';

class Cheat extends React.Component{
    render(){
        return (
            <div className="cheat">
                <div>{this.props.cheat.description}</div>
                <ClipboardEnabledText content={this.props.cheat.command} />
            </div>
        )
    }
}

Cheat.propTypes = {
    cheat: PropTypes.shape({
        description: PropTypes.string.isRequired,
        command: PropTypes.string.isRequired,
        keywords: PropTypes.array
    }).isRequired
}

export default Cheat;