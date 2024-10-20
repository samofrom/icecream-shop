import styled from 'styled-components';

export namespace S {
  export const Button = styled.button`
    ${({ theme }) => theme.typography['button']}
    background: none;
    border: none;
    cursor: pointer;
    user-select: none;

    padding: 12px 24px;
    border-radius: 20px;

    color: ${({ theme }) => theme.color['text/white']};
    background-color: ${({ theme }) => theme.color['buttonContained']};

    &:hover {
      background-color: ${({ theme }) => theme.color['buttonContainedHover']};
    }

    @media ${({ theme }) => theme.breakpoint['sm']} {
      background-color: ${({ theme }) => theme.color['cartBackground']};
      border-radius: 50%;
      padding: 12px;

      &:hover {
        background-color: ${({ theme }) => theme.color['cartBackground']};
      }
    }
  `;

  export const Icon = styled.div`
    @media not ${({ theme }) => theme.breakpoint['sm']} {
      display: none;
    }
  `;

  export const Label = styled.span`
    @media ${({ theme }) => theme.breakpoint['sm']} {
      display: none;
    }
  `;
}
