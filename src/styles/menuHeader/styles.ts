import styled from "styled-components";

export const MenuHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.625rem;
  border-bottom: 1px solid ${props => props.theme.hr};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.bg};

  nav {
    ul {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 2rem;

      li {
        a {
          color: ${props => props.theme.secondary};
          transition: all 0.2s;
          padding-bottom: 0.2rem;

          &:hover {
            color: ${props => props.theme.primary};
          }

          &.activeLink {
            color: ${props => props.theme.primary};
            border-bottom: 1px solid ${props => props.theme.secondary};
            }
        }
      }
    }
  }

`