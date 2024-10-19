import { FC } from 'react';
import { S } from './Logo.styles';

import LogoSVG from '../../assets/images/svg/logo.svg?react';
import Typography from '../Typography/Typography.tsx';

type LogoProps = {
  companyName: string;
};

const Logo: FC<LogoProps> = ({ companyName }) => {
  return (
    <S.Logo href={'/'}>
      <LogoSVG />
      <Typography variant={'h2'}>{companyName}</Typography>
    </S.Logo>
  );
};

export default Logo;
