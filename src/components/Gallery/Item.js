import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { Grid, Card, Modal, Tooltip, Button } from 'nebula-react';
import { MdFavoriteOutline, MdMoreHoriz } from 'react-icons/lib/md';
import { TiArrowForwardOutline } from 'react-icons/lib/ti';

class GalleryItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    addToFavList: PropTypes.func,
    item: PropTypes.shape({
      media: PropTypes.object
    })
  }

  constructor() {
    super();
    this.state = {
      isModalOpen: false
    };
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  }

  handleClose = () => {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    const { item, addToFavList, id } = this.props;

    const renderPhotoTag = () => {
      const tags = item.tags.split(' ').slice(1, 6);
      return tags.map(tag => (
        <Link
          to="/"
          key={tag}
          className="c-tags__item"
        >
          {tag}
        </Link>
      ));
    };

    return (
      <Grid.Item width={['1/2', '1/3@sm', '1/4@md']}>
        <Card.Wrapper>
          <Card.Body>
            <div className="c-card__image-wrap">
              <a
                href=""
                onClick={addToFavList}
              >
                <img
                  src={item.media.m}
                  alt={item.title}
                  className="c-card__image"
                />
              </a>
            </div>
            <p><strong>{item.title}</strong></p>
            <div className="u-text-center">
              <Tooltip.Wrapper>
                <Button
                  size="sm"
                  theme="alpha"
                  className="c-btn--circle"
                  tag="a"
                  to="#"
                  id={id}
                  onClick={addToFavList}
                >
                  <MdFavoriteOutline size={24} />
                </Button>
                <Tooltip.Content
                  direction="south"
                  width="120px"
                >
                  Love this!
                </Tooltip.Content>
              </Tooltip.Wrapper>
              <Tooltip.Wrapper>
                <Button
                  size="sm"
                  theme="beta"
                  className="c-btn--circle"
                  tag="a"
                  to="#"
                  id={id}
                >
                  <TiArrowForwardOutline size={24} />
                </Button>
                <Tooltip.Content
                  direction="south"
                  width="120px"
                >
                  Share this!
                </Tooltip.Content>
              </Tooltip.Wrapper>
              <Tooltip.Wrapper>
                <Button
                  size="sm"
                  className="c-btn--success c-btn--circle"
                  tag="a"
                  to="#"
                  id={id}
                  onClick={this.openModal}
                >
                  <MdMoreHoriz size={24} />
                </Button>
                <Tooltip.Content
                  direction="south"
                  width="120px"
                >
                  See more!
                </Tooltip.Content>
              </Tooltip.Wrapper>
            </div>
          </Card.Body>
        </Card.Wrapper>
        {this.state.isModalOpen && (
          <Modal.Wrapper
            closeModal={this.handleClose}
            id="c-modal-gallery"
            ariaLabel="Gallery Modal"
          >
            <Modal.Overlay clickToClose />
            <Modal.Body>
              <div className="c-modal__header">
                <h4 className="c-modal__title">{item.title}</h4>
                <Modal.Close>
                  <Modal.Dismiss>
                    Close
                  </Modal.Dismiss>
                </Modal.Close>
              </div>
              <Modal.Content>
                <div className="c-modal__description">
                  {ReactHtmlParser(item.description)}
                </div>
                <div className="c-tags">
                  {renderPhotoTag()}
                </div>
              </Modal.Content>
            </Modal.Body>
          </Modal.Wrapper>
        )}
      </Grid.Item>
    );
  }
}

export default GalleryItem;