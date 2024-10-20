import styled from 'styled-components';
import { Color } from './Tag.tsx';
import { CustomTheme } from '../../styles/theme.ts';

const mapColorToHex = (theme: CustomTheme, color: Color) => {
  switch (color) {
    case 'blue': {
      return theme.color['blue'];
    }
    case 'red': {
      return theme.color['red'];
    }
    case 'green':
      return theme.color['green'];
  }
};

export namespace S {
  export const Tag = styled.span<{ $color: Color }>`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 4px 16px;
    border-radius: 64px;

    color: ${({ theme }) => theme.color['text/white']};
    background-color: ${({ theme, $color }) => mapColorToHex(theme, $color)};
  `;
}
