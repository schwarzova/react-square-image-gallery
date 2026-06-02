import React, { useRef, useState } from 'react';

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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>();
  const prevOverflow = useRef<string>('');

  function handleImageDetailOpen(_image: Image, index: number) {
    setSelectedImageIndex(index);
    prevOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  function handleImageDetailClose() {
    setSelectedImageIndex(undefined);
    document.body.style.overflow = prevOverflow.current;
  }

  return (
    <>
      <div
        className={`square-image-gallery ${
          dark ? 'dark-square-image-gallery' : ''
        }`}
        style={{ gap: imagesGap }}
      >
        {props.images.map((image, index) => (
          <img
            key={image.imageSrc}
            className="square-image-gallery-image"
            src={image.imageSrc}
            alt={image.imageAlt ?? image.imageTitle}
            loading="lazy"
            onClick={() => handleImageDetailOpen(image, index)}
          />
        ))}
      </div>
      {selectedImageIndex !== undefined && (
        <ImageDetail
          dark={dark}
          customClose={props.customClose}
          customNext={props.customNext}
          customPrev={props.customPrev}
          imageIndex={selectedImageIndex}
          images={props.images}
          showTitles={showTitles}
          onDetailClose={handleImageDetailClose}
        />
      )}
    </>
  );
}

export default SquareImageGallery;
