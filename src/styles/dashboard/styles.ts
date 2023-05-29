import styled from "styled-components";

export const DashboardContainer = styled.section`
  width: 100%;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    height: 2.5rem;
    margin-top: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-content {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .picture-content {
        width: 2.625rem;
        height: 2.625rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        border: 2px solid ${props => props.theme.secondary};
        overflow: clip;

        .profile-picture {
          width: 2.625rem;
          height: 2.625rem;
          object-fit: cover;
        }
      }

      .styled-select-button {
        width: 280px;
        display: flex;
        padding: 0.5rem;
        align-items: center;
        justify-content: space-between;
        background: transparent;
        border: none;
        cursor: pointer;
        

        &[aria-expanded="false"] {
          svg {
            transition: all 0.2s;
            transform: rotate(0deg);
          }
        }

        &[aria-expanded="true"] {
          svg {
            transition: all 0.2s;
            transform: rotate(-90deg);
          }
        }
      }

      .styled-select-options {
        position: absolute;
        width: 280px;
        left: 3.2rem;
        top: 42px;
        background: ${props => props.theme["black-soft"]};
        border: 1px solid ${props => props.theme.hr};
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: clip;

        li {
          padding: 0.8rem 1rem;
          cursor: pointer;
          &:hover {
            background: ${props => props.theme.secondary};
          }
        }
      }


      span {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 110%;
        letter-spacing: -0.03em;
      }
    }

    button.new-release {
      height: 100%;
      border-radius: 8px;
      border: 0;
      outline: none;
      padding: 8px 16px;
      font-size: 0.875rem;
      color: ${props => props.theme["text-white"]};
      background: ${props => props.theme.secondary};
      transition: all 0.2s;

      &:hover {
        background: ${props => props.theme.primary};
      }
    }
  }
`
