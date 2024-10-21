import { css } from 'styled-components';

export const theme = {
  color: {
    'text/primary': '#354053',
    'text/secondary': '#888888',
    'text/accent': '#2490E6',
    'text/white': '#ffffff',

    'bg/white': '#FFFFFF',
    'bg/black': '#000000',
    'bg/grey': '#fcfcfc',
    'bg/mud': '#ececec',

    blue: '#2490E6',
    red: '#f64d4d',
    green: '#16c75d',
    orange: '#ffb842',

    buttonContained: '#2490E6',
    buttonContainedHover: '#1d80dd',

    cartBackground: '#ebf6fb',
  },

  shadow: {
    'shadow/1': '0 2px 13px rgba(48, 48, 48, .25)',
    'shadow/2': '0 4px 10px hsla(0, 0%, 64.3%, .1)',
  },

  stroke: {
    'stroke/1': '1px solid #eaeaea',
  },

  typography: {
    h1: css`
      font-size: 40px;
      font-weight: 700;
      line-height: 38px;
    `,
    h2: css`
      font-size: 18px;
      font-weight: 700;
      line-height: 17px;
    `,
    bodyM: css`
      font-size: 15px;
      font-weight: 500;
      line-height: 20px;
    `,
    body: css`
      font-size: 15px;
      font-weight: 400;
      line-height: 14px;
    `,
    bodyS: css`
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    `,
    button: css`
      font-size: 15px;
      font-weight: 600;
      line-height: 14px;
    `,
  },

  breakpoint: {
    sm: '(max-width: 625px)',
  },
} as const;

export type CustomTheme = typeof theme;
