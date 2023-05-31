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
    backdrop-filter: blur(2px);
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
    max-width: 1000px;
    background: ${(props) => props.theme["black-soft"]};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border: 1px solid ${(props) => props.theme["hr"]};
    padding: 1rem 3rem 3rem;
    position: relative;
    border-radius: 12px;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  .ReactModal__Overlay--after-open{
    opacity: 1;
  }
  .ReactModal__Overlay--before-close{
    opacity: 0;
  }
  
  fieldset.input-global {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    border: 0;
    outline: 0;

    label {
      width: 100%;
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-soft"]};
    }

    input {
      width: 100%;
      height: 2.5rem;
      border-radius: 6px;
      background: ${(props) => props.theme["bg"]};
      border: 1px solid ${(props) => props.theme["hr"]};
      padding: 0.5rem 0.75rem;
      font-size: 1rem;
      color: ${(props) => props.theme["text-white"]};
      outline: 0;
      transition: all 0.2s;

      &:hover {
        border: 1px solid ${(props) => props.theme["gray-soft"]};
      }

      &:focus {
        border: 1px solid ${(props) => props.theme["secondary"]};
      }
    }
  }

  .fieldset-flex {
    display: flex;
    align-items: end;
    gap: 0.5rem;
    justify-content: space-between;
  }

`;