import styled, { keyframes } from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const slideFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
  `;

const slideFromRight = keyframes`
from {
  opacity: 1;
  transform: translateX(0);
}
to {
  opacity: 0;
  transform: translateX(-100%);
}
`;

export const MenuHeaderContainer = styled.header`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.625rem;
  border-bottom: 1px solid ${(props) => props.theme.hr};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bg};

  nav.desktop {
    ul {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 2rem;

      li {
        a {
          color: ${(props) => props.theme.secondary};
          transition: all 0.2s;
          padding-bottom: 0.2rem;

          &:hover {
            color: ${(props) => props.theme.primary};
          }

          &.activeLink {
            color: ${(props) => props.theme.primary};
            border-bottom: 1px solid ${(props) => props.theme.secondary};
          }
        }

        button {
          border: none;
          background: transparent;
          outline: none;

          .picture-content {
            width: 2.625rem;
            height: 2.625rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            border: 3px solid ${(props) => props.theme.secondary};
            overflow: clip;
            transition: all 0.2s;

            .profile-picture {
              width: 2.625rem;
              height: 2.625rem;
              object-fit: cover;
            }
          }

          &:hover {
            .picture-content {
              border: 2px solid ${(props) => props.theme.primary};
            }
          }
        }
      }
    }
  }

  nav.mobile {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1px);
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;

    ul {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 6rem 2rem 0;
      background: ${(props) => props.theme.bg};

      li {
        padding: 0.5rem 0;
        a {
          color: ${(props) => props.theme.secondary};
          transition: all 0.2s;
          &:hover {
            color: ${(props) => props.theme.primary};
          }

          &.activeLink {
            color: ${(props) => props.theme.primary};
            border-bottom: 1px solid ${(props) => props.theme.secondary};
          }
        }

        button {
          width: 100%;
          margin-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 1rem;
          height: 3rem;
          padding-left: 0.2rem;
          border-radius: 999px;
          border: transparent;
          background: transparent;
          color: ${(props) => props.theme.secondary};

          .picture-content {
            width: 2.5rem;
            height: 2.5rem;
            overflow: clip;
            border-radius: 50%;
            border: 1px solid ${(props) => props.theme.secondary};

            img {
              background-size: cover;
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }

  nav.open-menu {
    animation: ${slideFromLeft} 0.2s ease-in-out forwards;
  }

  nav.closed-menu {
    animation: ${slideFromRight} 0.2s ease-in-out forwards;
  }

  button.hamburger {
    z-index: 101;
    width: 48px;
    height: 48px;
    background: transparent;
    border: none;
    position: absolute;
    top: 6px;
    left: 24px;
  }

  nav.mobile,
  button.hamburger {
    display: none;
  }

  @media (max-width: 900px) {
    flex-direction: row-reverse;

    nav.desktop {
      display: none;
    }

    nav.mobile {
      display: flex;
    }

    button.hamburger {
      display: flex;
    }
  }
`;

//Radix Components Styles
export const DropDownMenuContent = styled(DropdownMenu.Content)`
  margin-top: 0.5rem;
  margin-right: 1rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;
export const DropDownMenuItem = styled(DropdownMenu.Item)`
  width: 200px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme["black-soft"]};
  border: 0;
  outline: 0;
  font-size: 0.75rem;

  &:hover {
    background: ${(props) => props.theme["secondary"]};
  }

  &:first-child {
    border-radius: 12px 12px 0 0;
  }

  &:last-child {
    border-radius: 0 0 12px 12px;
  }
`;
