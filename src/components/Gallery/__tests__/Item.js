import React from 'react';
import { shallow } from 'enzyme';

import { Gallery } from '../';

const defaultProps = {
  id: 'http://www.flickr.com/photos/1234',
  item: {
    title: 'Test title',
    link: 'http://www.flickr.com/photos/1234',
    media: {
      m: 'http://farm5.staticflickr.com/1234.jpg'
    }
  }
};

describe('<Gallery.Item />', () => {
  it('renders with the correct default className', () => {
    const $ = shallow(
      <Gallery.Item
        {...defaultProps}
      />
    );
    expect($.hasClass('c-gallery__item')).toBe(true);
  });
});