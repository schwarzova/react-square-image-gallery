import React, { useState } from 'react';

import './styles/style.css';
import ImageDetail from './components/ImageDetail';

export type Image = {
  /**
   * Path to the image absolute or relative
   */
  imageSrc: string;
  /**
   * Optional, path to the image in detail view
   */
  imageDetailSrc?: string;
  /**
   * Title of image, used for image alt if imageAlt not set
   */
  imageTitle: string;
  /**
   * Optional, image alt
   */
  imageAlt?: string;
};

interface SquareImageGalleryProps {
  /**
   * Array of images displayed in gallery
   */
  images: Image[];
  /**
   * Gap between images in gallery grid
   */
  imagesGap?: string;
  /**
   * Show image title in image detail
   */
  showTitles?: boolean;
  /**
   * Dark mode
   */
  dark?: boolean;
  /**
   * Custom element for prev button in image detail
   */
  customPrev?: React.ReactNode;
  /**
   * Custom element for next button in image detail
   */
  customNext?: React.ReactNode;
  /**
   * Custom element for close button in image detail
   */
  customClose?: React.ReactNode;
}

/**
 * React square image gallery component
 */
function SquareImageGallery({
  dark = false,
  showTitles = false,
  imagesGap = '0.5rem',
  ...props
}: SquareImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<Image>();

  function handleImageDetailOpen(image: Image) {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  }

  function handleImageDetailClose() {
    setSelectedImage(undefined);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <div
        className={`square-image-gallery ${
          dark ? 'dark-square-image-gallery' : ''
        }`}
        style={{ gap: imagesGap }}
      >
        {props.images.map(i => (
          <img
            className="square-image-gallery-image"
            src={i.imageSrc}
            alt={i.imageAlt ? i.imageAlt : i.imageTitle}
            loading="lazy"
            onClick={() => handleImageDetailOpen(i)}
          />
        ))}
      </div>
      {selectedImage && (
        <ImageDetail
          dark={dark}
          customClose={props.customClose}
          customNext={props.customNext}
          customPrev={props.customPrev}
          image={selectedImage}
          images={props.images}
          showTitles={showTitles}
          onDetailClose={handleImageDetailClose}
        />
      )}
    </>
  );
}

export default SquareImageGallery;
