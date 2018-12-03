import React from 'react';
import PropTypes from 'prop-types';
import CheatList from '../cheats/CheatList';

class CategoryCard extends React.Component{
    render(){
        return (
            <div className="card col-lg m-2 p-2">
                <h4>{this.props.category.category}</h4>
                <CheatList cheats={ this.props.category.cheats }/>
            </div>
        )
    }
}

CategoryCard.protoTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        cheats: PropTypes.array.isRequired 
    }).isRequired
}

export default CategoryCard;