import { FC } from 'react';
import { S } from './PoweredBy.styles';

const PoweredBy: FC = () => {
  return (
    <S.PoweredBy>
      Developed with ❤️ in 2024 by{' '}
      <S.Link href="https://github.com/samofrom" target={'_blank'}>
        @samofrom
      </S.Link>
    </S.PoweredBy>
  );
};

export default PoweredBy;
