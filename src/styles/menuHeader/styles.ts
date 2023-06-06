import styled from "styled-components";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

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

  nav {
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
`;

//Radix Components Styles
export const DropDownMenuContent = styled(DropdownMenu.Content)`
  margin-top: 0.5rem;
  margin-right: 1rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

`
export const DropDownMenuItem = styled(DropdownMenu.Item)`
  width: 200px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme["black-soft"]};
  border: 0;
  outline: 0;
  font-size: 0.75rem;

  &:hover {
    background: ${props => props.theme["secondary"]};
  }

  &:first-child {
    border-radius: 12px 12px 0 0;
  }

  &:last-child {
    border-radius: 0 0 12px 12px;
  }

`
