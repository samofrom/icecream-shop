import React from 'react';
import styled from 'styled-components';
import { Color } from './Typography.tsx';
import { CustomTheme } from '../../styles/theme.ts';

export type BaseTypography = {
  children: React.ReactNode;
} & Partial<{
  $centerAlign: boolean;
  $color: Color;
  $bold: boolean;
}>;

const mapColorToTheme = (theme: CustomTheme, color?: Color) => {
  switch (color) {
    case 'primary':
      return theme.color['text/primary'];
    case 'secondary':
      return theme.color['text/secondary'];
    case 'accent':
      return theme.color['text/accent'];
    default:
      return 'inherit';
  }
};

const BaseTypography = styled.span<BaseTypography>`
  text-align: ${(props) => (props.$centerAlign ? 'center' : 'unset')};
  color: ${({ theme, $color }) => mapColorToTheme(theme, $color)};
  font-weight: ${({ $bold }) => ($bold ? '600' : 'normal')};
`;

export const H1 = styled(BaseTypography).attrs({ as: 'h1' })`
  ${({ theme }) => theme.typography['h1']};
  letter-spacing: -1.6px;
`;

export const H2 = styled(BaseTypography).attrs({ as: 'h2' })`
  ${({ theme }) => theme.typography['h2']};
`;

export const BodyM = styled(BaseTypography).attrs({ as: 'p' })`
  ${({ theme }) => theme.typography['bodyM']};
`;

export const Body = styled(BaseTypography).attrs({ as: 'p' })`
  ${({ theme }) => theme.typography['body']};
`;

export const BodyS = styled(BaseTypography).attrs({ as: 'p' })`
  ${({ theme }) => theme.typography['bodyS']};
`;
