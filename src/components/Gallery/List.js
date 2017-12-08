import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'nebula-react';

import { Gallery } from './';

const GalleryList = ({ items, addToFavList, id }) => (
  <Grid.Wrapper
    equalHeight
    matrix
    gutter="md"
  >
    {items.map(item => (
      <Gallery.Item
        item={item}
        id={id}
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
  })),
  id: PropTypes.string
};

export default GalleryList;