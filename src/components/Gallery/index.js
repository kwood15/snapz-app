import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { LoadingIcon, Section, Button, Icon } from 'nebula-react';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';

import GalleryList from './List';

class Gallery extends Component {
  static propTypes = {
    // renderFavList: PropTypes.func,
    // addToFavList: PropTypes.func
  }

  constructor() {
    super();
    this.state = {
      loading: true,
      items: [],
      isFavourite: false,
      favouriteIds: [],
      favourites: []
    };
  }

  componentDidMount() {
    this.getData();
    window.getData = (response) => {
      this.setState({
        loading: false,
        items: response.items,
        isFavourite: false,
        favouriteIds: [],
        favourites: []
      });
    };
  }

  getData = () => {
    const url = 'http://api.flickr.com/services/feeds/photos_public.gne';
    const callback = 'getData';
    const tags = 'lama, funny';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `${url}?format=json&jsoncallback=${callback}&tags=${tags}`;
    document.body.append(script);
  }

  addToFavList = (e) => {
    e.preventDefault();
    // const { items } = this.state;
    const favourites = [];
    const ids = [];
    const id = e.currentTarget.id;
    ids.push(id);

    // items.map((item) => {
    //   if (item[id] === id) {
    //     return item;
    //   }
    // });
    // favourites.push(favourites);
    this.setState({
      isFavourite: true,
      favouriteIds: this.state.favouriteIds.concat(ids),
      favourites: this.state.favourites.concat(favourites)
    });
  }

  // renderFavList = () => {
  //   console.log('test');
  // };

  render() {
    const { loading, items } = this.state;
    // const { renderFavList } = this.props;
    console.log(this.state);
    return (
      <div>
        {loading ? (
          <LoadingIcon icon={loading} loading={loading} size="50px" verticalAlign="middle" fill="#ff1493" />
        ) : (
          <Section>
            <Section size="sm">
              <Button size="sm" theme="alpha" onClick={this.renderFavList}>
                <Icon icon={FaAngleDoubleRight} iconPosition="right" width="50px" height="50px">
                  View favourites
                </Icon>
              </Button>
            </Section>
            <GalleryList items={items} addToFavList={this.addToFavList} />
            {/* {renderFavList ? (
              <GalleryList items={items} addToFavList={this.addToFavList} />
            ) : '' } */}
          </Section>
        )}
      </div>
    );
  }
}

export default Gallery;