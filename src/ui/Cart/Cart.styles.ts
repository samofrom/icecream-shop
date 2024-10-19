import styled from 'styled-components';

export namespace S {
  export const Cart = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    span {
      font-weight: normal;
      font-size: 12px;
    }
  `;

  export const CartContainer = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px;
    background-color: ${({ theme }) => theme.color['cartBackground']};
    border-radius: 50%;

    cursor: pointer;
  `;

  export const ItemCount = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 16px;
    color: ${({ theme }) => theme.color['text/white']};
    background-color: ${({ theme }) => theme.color['orange']};
    border-radius: 50%;

    font-size: 11px;
    font-weight: 600;
    text-align: center;
  `;
}
