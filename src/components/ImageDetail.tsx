import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image } from '../index';
import Arrow from './Arrow';
import Cross from './Cross';

type Props = {
  customClose?: React.ReactNode;
  customNext?: React.ReactNode;
  customPrev?: React.ReactNode;
  dark?: boolean;
  imageIndex: number;
  images: Image[];
  showTitles?: boolean;
  onDetailClose: () => void;
};

function ImageDetail(props: Props) {
  const [imageIndex, setImageIndex] = useState(props.imageIndex);
  const overlayRef = useRef<HTMLDivElement>(null);

  const image = props.images[imageIndex];
  const imagesCount = props.images.length;

  const handleLeft = useCallback(() => {
    setImageIndex((i) => (i === 0 ? imagesCount - 1 : i - 1));
  }, [imagesCount]);

  const handleRight = useCallback(() => {
    setImageIndex((i) => (i === imagesCount - 1 ? 0 : i + 1));
  }, [imagesCount]);

  useEffect(() => {
    overlayRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const key = e.key.toLowerCase();
      if (key === 'arrowright') handleRight();
      else if (key === 'arrowleft') handleLeft();
      else if (key === 'escape') props.onDetailClose();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleLeft, handleRight, props.onDetailClose]);

  return (
    <div
      ref={overlayRef}
      tabIndex={-1}
      className={`${
        props.dark ? 'dark-square-image-gallery-detail' : ''
      } square-image-gallery-detail`}
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
        src={image.imageDetailSrc ?? image.imageSrc}
        alt={image.imageAlt ?? image.imageTitle}
        loading="lazy"
      />
      <div className="square-image-gallery-detail-bottom">
        <button onClick={handleLeft}>
          {props.customPrev ? props.customPrev : <Arrow prev />}
        </button>
        {props.showTitles && <span>{image.imageTitle}</span>}
        <button onClick={handleRight}>
          {props.customNext ? props.customNext : <Arrow />}
        </button>
      </div>
    </div>
  );
}

export default ImageDetail;
