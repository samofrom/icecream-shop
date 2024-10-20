import { forwardRef } from 'react';

import { S } from './Product.styles.ts';
import Typography from '../Typography/Typography.tsx';

import { ProductType } from '../../types/dto/products/products';
import Tag from '../Tag/Tag.tsx';
import { formatPrice } from '../../helpers/util.ts';

type ProductProps = ProductType & {
  Button: JSX.Element;
};

const Product = forwardRef<HTMLDivElement, ProductProps>(
  (
    {
      image,
      title,
      subtitle,
      vendorCode,
      costByCard,
      cost,
      hit,
      isLowCalories,
      Button,
      ...props
    },
    ref
  ) => (
    <S.Product ref={ref}>
      <S.ProductWrapper>
        <S.Header>
          <S.ImageWrapper href={'#'}>
            <S.Tags>
              {hit && <Tag label={'Хит'} color={'blue'} />}
              {isLowCalories && <Tag label={'ЗОЖ'} color={'green'} />}
              {props.new && <Tag label={'Новинка'} color={'red'} />}
            </S.Tags>

            <S.Image src={image} alt={subtitle} />
          </S.ImageWrapper>
        </S.Header>

        <S.Main>
          <Typography variant={'bodyS'} color={'secondary'}>
            Артикул: {vendorCode}
          </Typography>

          <S.Link href={'#'} title={subtitle}>
            <S.Title>
              <Typography variant={'bodyM'}>{title}</Typography>
            </S.Title>

            <S.Description>
              <Typography variant={'bodyS'} color={'secondary'}>
                {subtitle}
              </Typography>
            </S.Description>
          </S.Link>

          <S.CostContainer>
            <S.Cost>
              <Typography variant={'body'} color={'secondary'} bold>
                {formatPrice(costByCard)}
                <span>₽</span>
              </Typography>
              <Typography variant={'bodyS'} color={'secondary'}>
                по карте
              </Typography>
            </S.Cost>

            <S.Cost>
              <Typography variant={'body'} color={'accent'} bold>
                {formatPrice(cost)}
                <span>₽</span>
              </Typography>
              <Typography variant={'bodyS'} color={'accent'} bold>
                без карты
              </Typography>
            </S.Cost>
          </S.CostContainer>
        </S.Main>

        <S.Footer>{Button}</S.Footer>
      </S.ProductWrapper>
    </S.Product>
  )
);

export default Product;
