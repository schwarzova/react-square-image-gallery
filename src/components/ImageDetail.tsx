import React, { useState } from 'react';
import { Image } from '../index';
import Arrow from './Arrow';
import Cross from './Cross';

type Props = {
  customClose?: React.ReactNode;
  customNext?: React.ReactNode;
  customPrev?: React.ReactNode;
  dark?: boolean;
  image: Image;
  imageIndex: number;
  images: Image[];
  showTitles?: boolean;
  onDetailClose: () => void;
};

function ImageDetail(props: Props) {
  const [image, setImage] = useState(props.image);
  const [imageIndex, setImageIndex] = useState(props.imageIndex);

  const imagesCount = props.images.length;

  function handleLeft() {
    if (imageIndex === 0) {
      setImageIndex(imagesCount - 1);
      setImage(props.images[imagesCount - 1]);
      return;
    }

    setImageIndex(imageIndex - 1);
    setImage(props.images[imageIndex - 1]);
  }

  function handleRight() {
    if (imageIndex === imagesCount - 1) {
      setImageIndex(0);
      setImage(props.images[0]);
      return;
    }

    setImageIndex(imageIndex + 1);
    setImage(props.images[imageIndex + 1]);
  }

  function handleKeyDown(key: string) {
    if (key === 'arrowright') {
      handleRight();
    }

    if (key === 'arrowleft') {
      handleLeft();
    }

    if (key === 'escape') {
      props.onDetailClose();
    }
  }

  return (
    <div
      className={`${
        props.dark ? 'dark-square-image-gallery-detail' : ''
      } square-image-gallery-detail`}
      onKeyDown={e => handleKeyDown(e.key.toLocaleLowerCase())}
    >
      <div className="square-image-gallery-detail-top">
        <div></div>
        <div>
          {imageIndex + 1}/{imagesCount}
        </div>
        <button onClick={props.onDetailClose}>
          {props.customClose ? props.customClose : <Cross />}
        </button>
      </div>
      <img
        className="square-image-gallery-detail-image"
        src={image.imageDetailSrc ? image.imageDetailSrc : image.imageSrc}
        alt={image.imageAlt ? image.imageAlt : image.imageTitle}
        loading="lazy"
      />
      <div className="square-image-gallery-detail-bottom">
        <button onClick={handleLeft}>
          {props.customPrev ? props.customPrev : <Arrow prev />}
        </button>
        {props.showTitles && <span>{image.imageTitle}</span>}
        <button onClick={handleRight} autoFocus>
          {props.customNext ? props.customNext : <Arrow />}
        </button>
      </div>
    </div>
  );
}

export default ImageDetail;
