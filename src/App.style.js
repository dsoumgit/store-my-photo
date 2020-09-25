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
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: rgba(237, 24, 102, 1);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
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