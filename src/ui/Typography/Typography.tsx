import React, { FC } from 'react';

import {
  BaseTypography,
  BodyM,
  Body,
  BodyS,
  H1,
  H2,
} from './Typography.styles';

export type Variant = 'h1' | 'h2' | 'bodyM' | 'body' | 'bodyS';

export type Color = 'primary' | 'secondary' | 'accent';

export type TypographyProps = {
  children: React.ReactNode;
} & Partial<{
  variant: Variant;
  centerAlign: boolean;
  color: Color;
  bold: boolean;
}>;

const variantMap: Record<Variant, FC<BaseTypography>> = {
  h1: H1,
  h2: H2,
  bodyM: BodyM,
  body: Body,
  bodyS: BodyS,
};

const Typography: FC<TypographyProps> = ({
  children,
  variant = 'body',
  centerAlign = false,
  color,
  bold = false,
}) => {
  const Tag = variantMap[variant];

  return (
    <Tag $centerAlign={centerAlign} $color={color} $bold={bold}>
      {children}
    </Tag>
  );
};

export default Typography;
