import PropTypes from 'prop-types';
import { GalleryItemStyled } from './GalleryItem.styled';

const GalleryItem = ({ imageData, onModalOpen }) => {
  return (
    <GalleryItemStyled
      onClick={onModalOpen}
      data-imageurl={imageData.largeImageURL}
    >
      <div className="container">
        <div className="image-wrapper">
          <div className="image">
            <img src={imageData.webformatURL} alt={imageData.tags} />
          </div>
        </div>
        <div className="stats">
          <p className="item">
            <b>Likes</b>
            {imageData.likes}
          </p>
          <p className="item">
            <b>Views</b>
            {imageData.views}
          </p>
          <p className="item">
            <b>Comments</b>
            {imageData.comments}
          </p>
          <p className="item">
            <b>Downloads</b>
            {imageData.downloads}
          </p>
        </div>
      </div>
    </GalleryItemStyled>
  );
};

GalleryItem.propTypes = {
  imageData: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    likes: PropTypes.number,
    views: PropTypes.number,
    comments: PropTypes.number,
    downloads: PropTypes.number,
  }).isRequired,
};

export default GalleryItem;
