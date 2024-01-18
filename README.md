# React square image gallery

Simple square image gallery for React

## Features

- Square image gallery
- Image detail view
- Responsive
- Keyboard navigation support
- React / Typescript

## Installation

React Image Gallery requires **React 16.0.0 or later.**

```
npm install react-square-image-gallery
```

## Props

| Name         | Type                  | Default Value | Description                                               |
| ------------ | --------------------- | ------------- | --------------------------------------------------------- |
| images       | `Image[]` (see below) |               | Required. Images displayed in gallery                     |
| imagesGap?   | `string``             | "0.5rem"      | Optional. Gap between images in gallery grid              |
| showTitles?  | `boolean`             | false         | Optional. Show image's titles in image detail             |
| dark?        | `boolean`             | false         | Optional. Dark mode                                       |
| customPrev?  | `React.ReactNode`     |               | Optional. Custom element for prev button in image detail  |
| customNext?  | `React.ReactNode`     |               | Optional. Custom element for next button in image detail  |
| customClose? | `React.ReactNode`     |               | Optional. Custom element for close button in image detail |

### Image type

Custom type for one image in gallery

```tsx
type Image = {
  /*
    Path to the image absolute or relative
  */
  imageSrc: string;
  /*
    Optional. Path to the image in detail view
  */
  imageDetailSrc?: string;
  /*
    Title of image, used for image alt if imageAlt not set
  */
  imageTitle: string;
  /*
    Optional. Image alt
  */
  imageAlt?: string;
};
```
