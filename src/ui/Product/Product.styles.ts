import styled from 'styled-components';

export namespace S {
  export const Product = styled.article`
    width: 270px;

    border-bottom: ${({ theme }) => theme.stroke['stroke/1']};

    max-height: 470px;

    @media ${({ theme }) => theme.breakpoint['sm']} {
      width: 100%;
    }
  `;

  export const ProductWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    height: 100%;

    padding: 20px;
    border-radius: 12px;

    &:hover {
      box-shadow: ${({ theme }) => theme.shadow['shadow/1']};
    }

    @media ${({ theme }) => theme.breakpoint['sm']} {
      flex-direction: row;
      padding: 4px;

      &:hover {
        box-shadow: unset;
      }
    }
  `;

  export const Header = styled.header`
    width: 230px;
    height: 230px;

    flex-shrink: 0;

    @media ${({ theme }) => theme.breakpoint['sm']} {
      width: 120px;
      height: 120px;
    }
  `;

  export const Tags = styled.div`
    position: absolute;

    display: flex;
    gap: 8px;

    @media ${({ theme }) => theme.breakpoint['sm']} {
      flex-direction: column;
    }
  `;

  export const ImageWrapper = styled.a``;

  export const Image = styled.img`
    width: 100%;
    height: auto;
  `;

  export const Main = styled.main`
    display: flex;
    flex-direction: column;

    flex: 1;

    @media ${({ theme }) => theme.breakpoint['sm']} {
      flex: 1 1 auto;
    }
  `;

  export const Link = styled.a`
    display: flex;
    flex-direction: column;

    flex: 1;

    @media ${({ theme }) => theme.breakpoint['sm']} {
      overflow: hidden;
    }
  `;

  export const Title = styled.div`
    margin-bottom: 4px;
    flex: 1;

    @media ${({ theme }) => theme.breakpoint['sm']} {
      text-overflow: ellipsis;
    }
  `;

  export const Description = styled.div`
    margin-bottom: 16px;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    @media ${({ theme }) => theme.breakpoint['sm']} {
      display: none;
    }
  `;

  export const CostContainer = styled.div`
    display: flex;
    gap: 16px;
  `;

  export const Cost = styled.div`
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
    }
  `;

  export const Footer = styled.footer`
    margin-top: 16px;
    text-align: center;

    @media ${({ theme }) => theme.breakpoint['sm']} {
      align-self: flex-end;
    }
  `;
}
