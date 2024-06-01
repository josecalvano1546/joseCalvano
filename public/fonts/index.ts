// Fonts
import localFont from 'next/font/local';
import { Rubik } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

// Utils

const BoringSansB = localFont({
  src: [
    {
      path: './BoringSansB/BoringSansBTrial-HeavyItalic.ttf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './BoringSansB/BoringSansBTrial-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './BoringSansB/BoringSansBTrial-BoldItalic.ttf',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: './BoringSansB/BoringSansBTrial-Bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './BoringSansB/BoringSansBTrial-Italic.ttf',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: './BoringSansB/BoringSansBTrial-Regular.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './BoringSansB/BoringSansBTrial-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './BoringSansB/BoringSansBTrial-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './BoringSansB/BoringSansBTrial-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },

    {
      path: './BoringSansB/BoringSansBTrial-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './BoringSansB/BoringSansBTrial-Light.ttf',
      weight: '300',
      style: 'normal',
    }
  ],
});
const RubikFont = Rubik({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

const Fonts: Record<string, NextFont> = {
  BoringSansB,
  RubikFont,
};

export default (font = 'BoringSansB') => Fonts[font];
