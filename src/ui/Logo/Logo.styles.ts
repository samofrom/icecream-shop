import styled from 'styled-components';

export namespace S {
  export const Logo = styled.a`
    display: inline-flex;
    align-items: center;

    gap: 8px;

    svg {
      width: 40px;
      height: 40px;
    }

    @media ${({ theme }) => theme.breakpoint['sm']} {
      h2 {
        display: none;
      }
    }
  `;
}
