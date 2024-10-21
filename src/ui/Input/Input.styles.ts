import styled from 'styled-components';

export namespace S {
  export const Input = styled.input`
    font: inherit;
    border: none;
    outline: none;

    width: 250px;
    margin-right: auto;
    padding: 16px 16px;
    height: 20px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color['bg/mud']};
  `;
}
