import styled from 'styled-components';

export const bodyContainer = styled.body`
    margin: 0;
    padding: 0;
    font-size: 12px;
    background-color: rgb(244, 248, 253);
    min-height: 100%;
`;

export const H1Style = styled.h1`
    text-align: center;
    font-family: 'Tangerine', serif;
    font-size: 8rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    text-shadow: 4px 4px 4px #aaa;
    color: rgb(114, 21, 151);
`;

export const SpinnerStyle = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    font-size: 3rem;
`;

export const SpinnerSpan = styled.span`
    animation: loadingDots 2s infinite;

    @keyframes loadingDots {
        from {
          opacity: 0;
        }
      
        to {
          opacity: 1;
        }
      }
`;

export const FooterContainer = styled.footer`
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 1rem;
`

export const FooterStyle = styled.div`
    text-align: center;
  padding: 2px;
  font-size: 1rem;
  color: rgb(104, 102, 102, .5);
`;