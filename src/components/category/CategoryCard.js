import React from 'react';
import PropTypes from 'prop-types';
import Cheat from '../cheat/Cheat';
import './CategoryCard.css'

class CategoryCard extends React.Component{
    render(){
        return (
            <div className="card m-1">
                <h5 className="p-2 text-capitalize">{this.props.category.category}</h5>
                { this.props.category.cheats.map( (cheat, key) => 
                    <Cheat cheat={cheat} key={key} />
                )}
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