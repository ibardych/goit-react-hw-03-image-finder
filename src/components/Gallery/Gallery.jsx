import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryContainer, GalleryStyled } from './Gallery.styled';
import GalleryItem from './GalleryItem';
import { Button } from 'components/Styled/Button.styled';
import { requestPixabayImages } from 'helpers/requests';
import { IMAGES_PER_PAGE } from 'constants/gallery';
import { Loader } from 'components/Styled/Loader.styled';
import Modal from 'components/Modal/Modal';

const defaultState = {
  status: 'idle',
  page: 1,
  images: [],
  total: 0,
  error: null,
  reachedEnd: false,
  largeImage: null,
  modalOpened: false,
};

class Gallery extends Component {
  state = { ...defaultState };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ ...defaultState }, () => this.fetchImages());
    } else if (prevState.page !== this.state.page && this.state.page > 1) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const page = this.state.page;

    const params = {
      query: this.props.query,
      pageNumber: page,
      imagesPerPage: IMAGES_PER_PAGE,
    };

    this.setState({ status: 'pending' });

    setTimeout(() => {
      requestPixabayImages(params)
        .then(response => {
          const { totalHits, hits: images } = response.data;

          this.setState(prevState => ({
            status: 'resolved',
            total: totalHits,
            reachedEnd: this.checkReachedEnd(totalHits),
            images: [...prevState.images, ...images],
          }));

          console.log(images);
        })
        .catch(error => {
          this.setState({ status: 'rejected', error });
        })
        .finally(() => {});
    }, 300);
  };

  checkReachedEnd = totalHits => {
    return Math.ceil(totalHits / IMAGES_PER_PAGE) === this.state.page;
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = e => {
    this.setState({
      largeImage: e.currentTarget.getAttribute('data-imageurl'),
      modalOpened: true,
    });
  };

  closeModal = e => {
    if (
      e.target === e.currentTarget ||
      e.currentTarget.classList.contains('close')
    )
      this.setState({
        modalOpened: false,
        largeImage: null,
      });
  };

  render() {
    const { status, images, reachedEnd, error, largeImage, modalOpened } =
      this.state;

    return (
      <GalleryContainer>
        {status === 'idle' && (
          <div className="idle">Please select or enter search query</div>
        )}

        {images.length !== 0 && (
          <>
            <GalleryStyled>
              {images.map(imageData => (
                <GalleryItem
                  key={imageData.id}
                  imageData={imageData}
                  onModalOpen={this.openModal}
                />
              ))}
            </GalleryStyled>
            {!reachedEnd && status !== 'pending' && (
              <Button onClick={this.loadMore}>Load more</Button>
            )}
          </>
        )}

        {status === 'rejected' && (
          <div className="rejected">Rejected {error.message}</div>
        )}

        {status === 'pending' && <Loader className="pending" />}

        <Modal modalOpened={modalOpened} onCloseModal={this.closeModal}>
          {largeImage && (
            <img
              className="large-image"
              src={this.state.largeImage}
              alt="large"
            />
          )}
        </Modal>
      </GalleryContainer>
    );
  }
}

Gallery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Gallery;
