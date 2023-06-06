import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const translactionUpforDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }

`

export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 8rem;

  .logo {
    animation: ${translactionUpforDown} 1s ease-in-out;
  }

  main {
    width: 100%;
    max-width: 26.5625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 3rem;
    background: ${props => props.theme.bg};
    border: 1px solid ${props => props.theme.hr};
    border-radius: 24px;
    animation: ${fadeIn} 1s ease-in-out;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      color: ${props => props.theme["text-white"]};
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
      color: ${props => props.theme["text-white"]};
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2.5rem;

      button {
        width: 100%;
        height: 3rem;
        border-radius: 8px;
        background: ${props => props.theme.secondary};
        color: ${props => props.theme["text-white"]};
        outline: none;
        border: none;
      }

      button.google {
        max-width: 260px;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 1rem;
        border-radius: 999px;
        border: 1px solid transparent;
        font-size: 0.875rem;
        padding: 0 0.15rem;
        background: ${props => props.theme["black-soft"]};
        color: white;
        margin-bottom: 1.5rem;
        transition: all 0.2s ease-in-out;
        
        .google-logo {
          width: 2.625rem;
          height: 2.625rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: ${props => props.theme["text-white"]};
        }

        &:hover {
          border: 1px solid ${props => props.theme.hr};
        }

      }
    }
  }

`