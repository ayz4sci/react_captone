import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import CategoryCard from '../category/CategoryCard';

class MasonryContainer extends Component {

  render() {
    return (
      <ResponsiveMasonry 
        columnsCountBreakPoints={{350: 1, 550: 2, 750: 3, 900: 3, 1024:4}}>
        <Masonry gutter='10'>
            { this.props.categories.map( (item, key) => 
              <CategoryCard category={item}  key={key}/>
            )}
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}

MasonryContainer.protoTypes = {
  categories: PropTypes.array.isRequired
}

export default MasonryContainer;
