import { FC } from 'react';

import { S } from './Tag.styles';
import Typography from '../Typography/Typography.tsx';

export type Color = 'red' | 'green' | 'blue';

type TagProps = {
  label: string;
  color: Color;
};

const Tag: FC<TagProps> = ({ label, color }) => {
  return (
    <S.Tag $color={color}>
      <Typography>{label}</Typography>
    </S.Tag>
  );
};

export default Tag;
