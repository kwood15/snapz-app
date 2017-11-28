import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { LoadingIcon, Section, Button, Icon } from 'nebula-react';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';

import GalleryList from './List';

class Gallery extends Component {
  // static propTypes = {
  //   favourites: PropTypes.arrayOf(PropTypes.shape({
  //     favourite: PropTypes.string
  //   }))
  // }

  constructor() {
    super();
    this.state = {
      loading: true,
      items: [],
      isFavourite: false,
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
        favourites: this.state.favourites
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
    const { items } = this.state;
    const id = e.currentTarget.id;
    const favourites = [];

    items.map((item) => {
      if (id === item.link) {
        return favourites.push(item);
      }
      return false;
    });

    this.setState({
      isFavourite: true,
      favourites: this.state.favourites.concat(favourites)
    });
  }

  render() {
    // const renderFavList = () => (
    //   <GalleryList favourites={favourites} />
    // );

    const { loading, items } = this.state;  // favourites, isFavourite
    localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
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
            {/* {isFavourite ? renderFavList() : 'xxx'} */}
          </Section>
        )}
      </div>
    );
  }
}

export default Gallery;