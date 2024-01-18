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
      {imageSrc: 'https://picsum.photos/id/17/700/700', imageTitle: 'Forrest in front of lake', imageDetailSrc: 'https://picsum.photos/id/17/1000/700'}, 
      {imageSrc: 'https://picsum.photos/id/57/1000/1000', imageTitle: 'Table with computer, books and phone on it'}, 
      {imageSrc: 'https://picsum.photos/id/69/700/800', imageTitle: 'White shoes in front of red wall'},
      {imageSrc: 'https://picsum.photos/id/77/700/700', imageTitle: 'Man crossing street', imageDetailSrc: 'https://picsum.photos/id/77/1700/700'},
      {imageSrc: 'https://picsum.photos/id/142/1800/1092', imageTitle: 'Three forks'},
      {imageSrc: 'https://picsum.photos/id/155/700/700', imageTitle: 'Opened old book'},
      {imageSrc: 'https://picsum.photos/id/172/700/700', imageTitle: 'Aaa 1'},
      {imageSrc: 'https://picsum.photos/id/182/1200/1300', imageTitle: 'Aaa 1'},
      {imageSrc: 'https://picsum.photos/id/199/700/700', imageTitle: 'Aaa 1'},
      {imageSrc: 'https://picsum.photos/id/229/700/700', imageTitle: 'Aaa 1'},
      {imageSrc: 'https://picsum.photos/id/242/700/700', imageTitle: 'Aaa 1', imageDetailSrc: 'https://picsum.photos/id/242/1700/700'},
      {imageSrc: 'https://picsum.photos/id/255/400/400', imageTitle: 'Aaa 1', imageDetailSrc: 'https://picsum.photos/id/255/1900/2400'}
    ],
    imagesGap: '10px',
    showTitles: false,
    dark: false,
  },
};

export const CustomPrevNextClose: Story = {
  args: {
    images: [
      {imageSrc: 'https://picsum.photos/id/659/700/700', imageTitle: 'Forrest in front of lake'}, 
      {imageSrc: 'https://picsum.photos/id/433/1000/1000', imageTitle: 'Table with computer, books and phone on it'}, 
      {imageSrc: 'https://picsum.photos/id/582/1000/1300', imageTitle: 'White shoes in front of red wall'},
      {imageSrc: 'https://picsum.photos/id/593/1800/1300', imageTitle: 'Man crossing street'},
    ],
    imagesGap: '1rem',
    showTitles: false,
    dark: false,
    customClose: 'close',
    customNext: 'next >',
    customPrev: '< prev',
  },
};

