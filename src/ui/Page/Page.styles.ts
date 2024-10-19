import styled from 'styled-components';

export namespace S {
  export const Page = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
  `;

  export const Header = styled.header`
    position: fixed;

    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px 32px;

    background-color: ${({ theme }) => theme.color['bg/white']};
    box-shadow: ${({ theme }) => theme.shadow['shadow/2']};

    z-index: 1000;
  `;

  export const Content = styled.main`
    display: flex;
    justify-content: center;
    padding: 95px 32px 16px;
    flex: 1;
  `;

  export const Footer = styled.footer`
    padding: 16px 32px;
    background-color: ${({ theme }) => theme.color['bg/grey']};
  `;
}
