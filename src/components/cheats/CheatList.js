import React from 'react';
import PropTypes from 'prop-types';
import Cheat from './Cheat';

class CheatList extends React.Component{

    render(){
        console.log(this.props.cheats);
        return (
            <div>
                { this.props.cheats.map( (cheat, key) => 
                    <Cheat cheat={cheat} key={key} />
                )}
            </div>
        )
    }
}

CheatList.protoTypes = {
    cheats: PropTypes.array.isRequired
}

export default CheatList;