import type { Meta, StoryObj } from '@storybook/react';

import SquareImageGallery from '../index';

const meta: Meta<typeof SquareImageGallery> = {
  title: 'Square image gallery',
  component: SquareImageGallery,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SquareImageGallery>;

export const BasicExample: Story = {
  args: {
    images: [
      {imageSrc: 'https://picsum.photos/id/17/700/700', imageTitle: 'Path through the forest', imageDetailSrc: 'https://picsum.photos/id/17/1000/700'}, 
      {imageSrc: 'https://picsum.photos/id/57/1000/1000', imageTitle: 'City Street'}, 
      {imageSrc: 'https://picsum.photos/id/69/700/800', imageTitle: 'Train tracks'},
      {imageSrc: 'https://picsum.photos/id/77/700/700', imageTitle: 'Road to the pier', imageDetailSrc: 'https://picsum.photos/id/77/1700/700'},
      {imageSrc: 'https://picsum.photos/id/142/1800/1092', imageTitle: 'Way to the castle'},
      {imageSrc: 'https://picsum.photos/id/155/700/700', imageTitle: 'Train tracks'},
      {imageSrc: 'https://picsum.photos/id/172/700/700', imageTitle: 'Road to the pier'},
      {imageSrc: 'https://picsum.photos/id/182/1200/1300', imageTitle: 'Road around the windmills'},
      {imageSrc: 'https://picsum.photos/id/199/700/700', imageTitle: 'Way to the beach'},
      {imageSrc: 'https://picsum.photos/id/229/700/700', imageTitle: 'Path through the forest'},
      {imageSrc: 'https://picsum.photos/id/242/700/700', imageTitle: 'Train tracks', imageDetailSrc: 'https://picsum.photos/id/242/1700/700'},
      {imageSrc: 'https://picsum.photos/id/255/400/400', imageTitle: 'Way to the hill', imageDetailSrc: 'https://picsum.photos/id/255/1900/2400'}
    ],
    imagesGap: '10px',
    showTitles: false,
    dark: false,
  },
};

export const CustomPrevNextClose: Story = {
  args: {
    images: [
      {imageSrc: 'https://picsum.photos/id/659/700/700', imageTitle: 'Husky'}, 
      {imageSrc: 'https://picsum.photos/id/433/1000/1000', imageTitle: 'Bear'}, 
      {imageSrc: 'https://picsum.photos/id/582/1000/1300', imageTitle: 'Fox'},
      {imageSrc: 'https://picsum.photos/id/593/1800/1300', imageTitle: 'Tiger'},
    ],
    imagesGap: '1rem',
    showTitles: false,
    dark: false,
    customClose: 'close',
    customNext: 'next >',
    customPrev: '< prev',
  },
};

