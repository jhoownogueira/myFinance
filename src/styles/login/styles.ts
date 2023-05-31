import styled from "styled-components";

export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

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

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      color: ${props => props.theme["text-white"]};
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
      color: ${props => props.theme["text-white"]};
    }

    form {
      width: 100%;

      .inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin: 2rem 0;

      input {
        width: 100%;
        height: 3rem;
        border: 1px solid ${props => props.theme.hr};
        outline: none;
        border-radius: 12px;
        padding: 0.5rem 1rem;
        color: ${props => props.theme["text-white"]};
        background: ${props => props.theme.black};
        transition: all 0.2s;

        &::placeholder {
          color: ${props => props.theme["text-gray"]};
        }

        &:focus {
          border: 1px solid ${props => props.theme.primary};
        }
      }
    }

    .separation {
        width: 100%;
        display: flex;
        gap: 0.25rem;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;

        span {
          display: block;
          min-width: fit-content;
          font-size: 0.75rem;
          color: ${props => props.theme.primary};
        }

        .hr {
          width: 100%;
          height: 1px;
          background: ${props => props.theme.hr};
        }
      }

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
        background: white;
        color: black;
        margin-bottom: 1.5rem;
      }
    }
  }

`