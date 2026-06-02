# React square image gallery

[![npm version](https://badge.fury.io/js/react-square-image-gallery.svg)](https://badge.fury.io/js/react-square-image-gallery)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

Simple square image gallery for React

### Live Demo

[Demo `react-square-image-gallery`](https://codesandbox.io/p/sandbox/elated-rgb-fv6y73)

![demo](https://github.com/schwarzova/react-square-image-gallery/blob/master/demo.gif?raw=true)

## Features

- Square image gallery grid
- Full-screen image detail view
- Keyboard navigation (← → arrows, Escape to close)
- Responsive (4 columns → 3 on tablet → 2 on mobile)
- Dark mode
- Custom prev / next / close buttons
- React 18 + TypeScript

## Installation

Requires **React 18 or later.**

```
npm install react-square-image-gallery
```

## Quick Start

```tsx
import SquareImageGallery, { Image } from 'react-square-image-gallery';

const images: Image[] = [
  {
    imageSrc: 'https://picsum.photos/id/659/700/700',
    imageTitle: 'Husky',
  },
  {
    imageSrc: 'https://picsum.photos/id/433/1000/1000',
    imageTitle: 'Bear',
  },
  {
    imageSrc: 'https://picsum.photos/id/582/1000/1300',
    imageTitle: 'Fox',
  },
  {
    imageSrc: 'https://picsum.photos/id/593/1800/1300',
    imageTitle: 'Tiger',
  },
];

<SquareImageGallery images={images} />
```

## Props

| Name         | Type                  | Default    | Description                                               |
| ------------ | --------------------- | ---------- | --------------------------------------------------------- |
| images       | `Image[]` (see below) |            | Required. Images displayed in gallery                     |
| imagesGap?   | `string`              | `"0.5rem"` | Gap between images in the grid                            |
| showTitles?  | `boolean`             | `false`    | Show image title in detail view                           |
| dark?        | `boolean`             | `false`    | Dark mode                                                 |
| customPrev?  | `React.ReactNode`     |            | Custom element for the prev button in detail view         |
| customNext?  | `React.ReactNode`     |            | Custom element for the next button in detail view         |
| customClose? | `React.ReactNode`     |            | Custom element for the close button in detail view        |

### Image type

```tsx
type Image = {
  imageSrc: string;        // path to the thumbnail image
  imageDetailSrc?: string; // optional higher-res image for detail view
  imageTitle: string;      // used as alt text if imageAlt is not set
  imageAlt?: string;       // optional explicit alt text
};
```
