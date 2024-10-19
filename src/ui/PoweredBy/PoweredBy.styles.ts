import styled from 'styled-components';

export namespace S {
  export const PoweredBy = styled.div`
    font-family: monospace;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 4px;
  `;

  export const Link = styled.a`
    color: ${({ theme }) => theme.color.blue};
    text-decoration: underline;
  `;
}
