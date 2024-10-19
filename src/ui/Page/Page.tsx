import { FC, ReactNode } from 'react';

import { S } from './Page.styles.ts';

type PageProps = {
  Header: ReactNode;
  Content: ReactNode;
  Footer: ReactNode;
};

const Page: FC<PageProps> = ({ Header, Content, Footer }) => {
  return (
    <S.Page>
      <S.Header>{Header}</S.Header>
      <S.Content>{Content}</S.Content>
      <S.Footer>{Footer}</S.Footer>
    </S.Page>
  );
};

export default Page;
