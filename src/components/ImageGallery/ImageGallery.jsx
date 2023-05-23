import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallerys } from './ImageGallery.styled';
import PropTypes from 'prop-types';
// import { Modal } from 'components/Modal/Modal';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGallerys className="ImageGallery">
      {images.map(({ webformatURL, tags, largeImageURL, id }) => (
        <ImageGalleryItem
          src={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
          key={id}
        />
      ))}
    </ImageGallerys>
  );
};


ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};