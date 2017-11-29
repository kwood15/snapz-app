import React, { Component } from 'react';
import { LoadingIcon, Section, Button, Icon } from 'nebula-react';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';

import GalleryList from './List';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      items: [],
      viewFavourite: false,
      favourites: []
    };
  }

  componentDidMount() {
    this.getData();
    window.getData = (response) => {
      this.setState({
        loading: false,
        items: response.items,
        viewFavourite: false,
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
    e.preventDefault();
    const { items, favourites } = this.state;
    const id = e.currentTarget.id;

    items.map((item) => {
      if (id === item.link) {
        favourites.push(item);
      }
      return false;
    });

    this.setState({
      viewFavourite: false,
      favourites
    });

    localStorage.setItem('favourites', JSON.stringify(favourites));
  }

  renderFavList = () => {
    this.setState({
      viewFavourite: true
    });
  }

  render() {
    const { loading, items, favourites, viewFavourite } = this.state;
    localStorage.getItem('favourites', favourites);

    console.log(this.state);

    return (
      <Section>
        {loading ? (
          <LoadingIcon
            icon={loading}
            loading={loading}
            size="50px"
            verticalAlign="middle"
            fill="#ff1493"
          />
        ) : (
          <div>
            {viewFavourite ? (
              <Section size="sm">
                <h1>Your favourites</h1>
                <GalleryList items={favourites} />
              </Section>
            ) : (
              <div>
                <Section size="sm">
                  <Button
                    size="sm"
                    theme="alpha"
                    onClick={this.renderFavList}
                  >
                    <Icon
                      icon={FaAngleDoubleRight}
                      iconPosition="right"
                      width="50px"
                      height="50px"
                    >
                      View favourites
                    </Icon>
                  </Button>
                </Section>
                <GalleryList
                  items={items}
                  addToFavList={this.addToFavList}
                />
              </div>
            )}
          </div>
        )}
      </Section>
    );
  }
}

export default Gallery;