import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'nebula-react';

import GalleryItem from './Item';

const GalleryList = ({ items, addToFavList }) => (
  <Grid.Wrapper
    equalHeight
    matrix
    gutter="md"
  >
    {items.map(item => (
      <GalleryItem
        item={item}
        id={item.link}
        key={item.link}
        addToFavList={addToFavList}
      />
    ))}
  </Grid.Wrapper>
);

GalleryList.propTypes = {
  addToFavList: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string
  }))
};

export default GalleryList;