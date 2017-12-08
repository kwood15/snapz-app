import React, { Component } from 'react';
import { LoadingIcon, Section, Button, Icon } from 'nebula-react';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
// import data from 'api/data.json';
// import mock from 'api/mock';

import { Gallery } from './';

class GalleryWrapper extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      items: [],
      favourites: [],
      viewFavourites: false
    };
  }

  // Mock Data Request
  // componentDidMount() {
  //   this.mockRequest();
  // }

  // mockRequest = () => {
  //   mock.getData();
  //   this.setState({
  //     loading: false,
  //     items: data.items,
  //     favourites: this.state.favourites,
  //     viewFavourites: false
  //   });
  // }

  componentDidMount() {
    this.getData();
    window.getData = (response) => {
      this.setState({
        loading: false,
        items: response.items,
        favourites: this.state.favourites,
        viewFavourites: false
      });
    };
  }

  getData = () => {
    const url = 'http://api.flickr.com/services/feeds/photos_public.gne';
    const callback = 'getData';
    const tags = 'lama, funny';
    const script = document.createElement('script');
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
        const filtered = favourites
        .map(filteredItem => filteredItem)
        .filter((filteredItem, filteredId, arr) => arr.indexOf(filteredItem) === filteredId);
        this.setState({
          favourites: filtered
        });
        localStorage.setItem('favourites', JSON.stringify(filtered));
      }
      return false;
    });
  }

  renderFavList = () => {
    const cached = localStorage.getItem('favourites');
    if (cached) {
      this.setState({
        viewFavourites: true,
        favourites: JSON.parse(cached)
      });
    }
  }

  render() {
    const { loading, items, favourites, viewFavourites } = this.state;
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
            {viewFavourites ? (
              <Section size="sm" >
                <h1>Your favourites</h1>
                <Gallery.List items={favourites} />
              </Section>
            ) : (
              <div>
                <Section size="sm">
                  <h1>Face of the day on Snapz!</h1>
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
                <Gallery.List
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

export default GalleryWrapper;