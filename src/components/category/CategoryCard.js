import React from 'react';
import PropTypes from 'prop-types';
import CheatList from '../cheats/CheatList';
import './CategoryCard.css'

class CategoryCard extends React.Component{
    render(){
        return (
            <div className="card mb-3">
                <h5 className="p-2 text-capitalize">{this.props.category.category}</h5>
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