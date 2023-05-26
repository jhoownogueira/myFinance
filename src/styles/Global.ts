import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: ${props => props.theme["text-white"]};
    @media (max-width: 1290px) {
      font-size: 93.75%;
    }
    @media (max-width: 1000px) {
      font-size: 87.50%;
    }
    @media (max-height: 650px) {
      font-size: 93.75%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.bg};
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: ${props => props.theme["text-white"]};
  }

  button, a {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background: white;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #666666;
    border-radius: 20px;
  }

  .body-lock {
    overflow: hidden;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 350px;
    background: ${(props) => props.theme["text-white"]};
    padding: 1rem 3rem 3rem;
    position: relative;
    border-radius: 12px;
  }
  
`;