import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const ControleContainer = styled.section`
  width: 100%;
  height: calc(100vh - 10rem);
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    height: 2.5rem;
    margin-top: 2.6rem;
    margin-bottom: 2.6rem;
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
        border: 2px solid ${(props) => props.theme.secondary};
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
        z-index: 15;
        background: ${(props) => props.theme["black-soft"]};
        border: 1px solid ${(props) => props.theme.hr};
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: clip;

        li {
          padding: 0.8rem 1rem;
          cursor: pointer;
          &:hover {
            background: ${(props) => props.theme.secondary};
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
      color: ${(props) => props.theme["text-white"]};
      background: ${(props) => props.theme.secondary};
      transition: all 0.2s;

      &:hover {
        background: ${(props) => props.theme.primary};
      }
    }
  }

  section.date-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .styled-select-button {
      width: 175px;
      display: flex;
      padding: 0.5rem 1rem;
      align-items: center;
      justify-content: space-between;
      background: transparent;
      border: 1px solid ${(props) => props.theme["hr"]};
      border-radius: 8px;
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
      right: 0;
      top: 42px;
      z-index: 15;
      background: ${(props) => props.theme["black-soft"]};
      border: 1px solid ${(props) => props.theme.hr};
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      overflow: clip;

      li {
        padding: 0.8rem 1rem;
        cursor: pointer;
        &:hover {
          background: ${(props) => props.theme.secondary};
        }
      }
    }
  }

  section.transactions-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;

    .card {
      width: 100%;
      display: flex;
      gap: 1rem;
      border: 1px solid ${(props) => props.theme["hr"]};
      padding: 1.5rem;
      border-radius: 12px;

      .icon {
        min-width: 48px;
        min-height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: ${(props) => props.theme["black-soft"]};

        svg {
          color: #6c7787;
        }
      }

      .red {
        svg {
          color: #ea3d4a;
        }
      }

      .green {
        svg {
          color: #4ab444;
        }
      }

      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span {
          font-weight: 500;
          font-size: 0.75rem;
          color: ${(props) => props.theme["text-white"]};
        }
        p {
          font-weight: 500;
          font-size: 1.5rem;
          color: ${(props) => props.theme["text-white"]};
        }
      }
    }
  }

  section.table-container {
    width: 100%;

    .table-header-container,
    .table-body-container {
      width: 100%;

      table {
        width: 100%;
        text-align: left;
        border-collapse: collapse;

        thead,
        tbody {
          display: block;
        }
      }
    }

    .table-header-container {
      table {
        thead {
          background: ${(props) => props.theme["black-soft"]};
          border-radius: 12px 12px 0 0;
          color: ${(props) => props.theme["text-white"]};
          border: 1px solid ${(props) => props.theme["hr"]};
          border-bottom: 0;
        }
      }
    }

    .table-body-container {
      table {
        tbody {
          max-height: 420px;
          overflow-y: auto;
        }
      }
    }

    table {
      width: 100%;
      tr {
        width: 100%;
        display: flex;
        align-items: center;
        height: 2.5rem;
      }

      th:nth-child(1),
      td:nth-child(1) {
        min-width: 170px;
        max-width: 170px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
      }

      th:nth-child(2),
      td:nth-child(2) {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
      }

      th:nth-child(3),
      td:nth-child(3) {
        min-width: 130px;
        max-width: 130px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
      }

      th:nth-child(4),
      td:nth-child(4) {
        min-width: 150px;
        max-width: 150px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
      }

      th:nth-child(5),
      td:nth-child(5) {
        min-width: 120px;
        max-width: 120px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
      }

      th:nth-child(6),
      td:nth-child(6) {
        min-width: 100px;
        max-width: 100px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          background: ${(props) => props.theme["black-soft"]};
          border-radius: 8px;
          color: ${(props) => props.theme["status-green"]};
        }
      }

      th:nth-child(7),
      td:nth-child(7) {
        position: relative;
        min-width: 70px;
        max-width: 70px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;

        .DropDownMenuButton {
          position: absolute;
          z-index: 12;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: transparent;
          border: 0;
          outline: 0;
          transition: all 0.2s;
          svg {
            color: ${(props) => props.theme["text-white"]};
          }

          &:hover {
            background: ${(props) => props.theme["bg"]};
          }
        }
      }
    }

    .table-body-container {
      table {
        border-top: 1px solid ${(props) => props.theme["hr"]};
        tbody {
          tr {
            background: ${(props) => props.theme["bg"]};
            border-bottom: 1px solid ${(props) => props.theme["hr"]};
            color: ${(props) => props.theme["text-white"]};
            font-size: 0.875rem;
            cursor: pointer;
            height: 3.5rem;

            &:hover {
              background: ${(props) => props.theme["black-soft"]};
              transition: all 0.2s;
            }

            td:nth-child(1),
            td:nth-child(2),
            td:nth-child(3),
            td:nth-child(4),
            td:nth-child(5),
            td:nth-child(6),
            td:nth-child(7) {
              border-left: 1px solid ${(props) => props.theme["hr"]};
              border-right: 1px solid ${(props) => props.theme["hr"]};
            }
          }
        }
      }
    }

    .table-footer-container {
      width: 100%;
      height: 16px;
      background: ${(props) => props.theme["black-soft"]};
      border-radius: 0 0 12px 12px;
    }
  }

  @media (max-width: 900px) {

    section.transactions-content {
      .card {
          .icon {
            display: none;
          }
      }
    }

    section.table-container {
      table {
        th:nth-child(5),
        td:nth-child(5) {
          display: none;
        }
        th:nth-child(4),
        td:nth-child(4) {
          display: none;
        }
      }
    }
  }
`;

export const NewTransactionModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    button {
      width: 2.5rem;
      height: 2.5rem;
      border: 0;
      background: transparent;
      outline: 0;

      svg {
        transition: all 0.2s;
      }

      &:hover {
        svg {
          color: ${(props) => props.theme["primary"]};
        }
      }
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    fieldset.input-toggle {
      width: 100%;
      outline: 0;
      border: 0;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      button {
        height: 2.5rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
      }

      button.close {
        width: 20%;
        background: transparent;
        border: 1px solid ${(props) => props.theme["hr"]};
        color: ${(props) => props.theme["hr"]};
        transition: all 0.2s;
        &:hover {
          background: ${(props) => props.theme["hr"]};
          color: ${(props) => props.theme["text-white"]};
        }
      }

      button.register {
        width: 80%;
        background: ${(props) => props.theme.secondary};
        border: transparent;
        color: ${(props) => props.theme["text-white"]};
        transition: all 0.2s;
        &:hover {
          background: ${(props) => props.theme.primary};
        }
      }
    }
  }
`;
export const EditNewTransactionModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    button {
      width: 2.5rem;
      height: 2.5rem;
      border: 0;
      background: transparent;
      outline: 0;

      svg {
        transition: all 0.2s;
      }

      &:hover {
        svg {
          color: ${(props) => props.theme["primary"]};
        }
      }
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    fieldset.input-toggle {
      width: 100%;
      outline: 0;
      border: 0;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      button {
        height: 2.5rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
      }

      button.close-edit {
        width: 20%;
        background: transparent;
        border: 1px solid ${(props) => props.theme["hr"]};
        color: ${(props) => props.theme["hr"]};
        transition: all 0.2s;
        &:hover {
          background: ${(props) => props.theme["hr"]};
          color: ${(props) => props.theme["text-white"]};
        }
      }

      button.save-transaction {
        width: 80%;
        background: ${(props) => props.theme.secondary};
        border: transparent;
        color: ${(props) => props.theme["text-white"]};
        transition: all 0.2s;
        &:hover {
          background: ${(props) => props.theme.primary};
        }
      }
    }
  }
`;
export const TransactionModal = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    h2 {
      font-weight: 500;
      font-size: 1.2rem;
    }

    button {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      outline: 0;
      background: transparent;

      svg {
        transition: all 0.2s;
      }

      &:hover {
        svg {
          color: ${(props) => props.theme["primary"]};
        }
      }
    }
  }

  form {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    fieldset.input-type,
    fieldset.input-status {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      outline: none;
      border: 0;
    }

    fieldset.input-type {
      label {
        width: 100%;
        font-size: 0.875rem;
        color: ${(props) => props.theme["gray-soft"]};
      }

      span {
        width: 100%;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #4ab444;
        border-radius: 6px;
        background: transparent;
        color: #4ab444;
        font-size: 1rem;
      }
    }

    fieldset.input-status {
      label {
        width: 100%;
        font-size: 0.875rem;
        color: ${(props) => props.theme["gray-soft"]};
      }

      span {
        width: 100%;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: transparent;
        border-radius: 6px;
        background: #4ab444;
        color: ${(props) => props.theme["text-white"]};
        font-size: 1rem;
      }
    }

    button {
      margin-top: 1rem;
      width: 100%;
      max-width: 150px;
      height: 2.5rem;
      display: flex;
      align-self: flex-end;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      background: transparent;
      border: 1px solid ${(props) => props.theme["secondary"]};
      color: ${(props) => props.theme["secondary"]};
      font-size: 1rem;
      transition: all 0.2s;

      &:hover {
        background: ${(props) => props.theme["secondary"]};
        color: ${(props) => props.theme["text-white"]};
      }
    }
  }
`;
export const DeleteModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    margin-top: 1.5rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;

    button {
      width: 100%;
      height: 2.5rem;
      max-width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      border-radius: 6px;
      outline: none;
    }

    button.cancel-delete {
      border: 1px solid ${(props) => props.theme["secondary"]};
      color: ${(props) => props.theme["secondary"]};
      background: transparent;
    }

    button.confirm-delete {
      border: transparent;
      background: #bc1421;
      color: ${(props) => props.theme["text-white"]};
    }
  }
`;
export const PayOffModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    margin-top: 1.5rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;

    button {
      width: 100%;
      height: 2.5rem;
      max-width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      border-radius: 6px;
      outline: none;
    }

    button.cancel-pay-off {
      border: 1px solid ${(props) => props.theme["secondary"]};
      color: ${(props) => props.theme["secondary"]};
      background: transparent;
    }

    button.confirm-pay-off {
      border: transparent;
      background: #4ab444;
      color: ${(props) => props.theme["text-white"]};
    }
  }
`;

//Radix Components Styles
export const DropDownMenuContent = styled(DropdownMenu.Content)`
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;
export const DropDownMenuItem = styled(DropdownMenu.Item)`
  width: 150px;
  padding: 0.5rem 1.5rem;
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
export const ToggleGroupContainer = styled(ToggleGroup.Root)`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  gap: 0.25rem;
  background: ${(props) => props.theme["bg"]};
  border-radius: 6px;
`;
export const ToggleGroupItem = styled(ToggleGroup.Item)`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme["bg"]};
  color: ${(props) => props.theme["text-gray"]};
  border: 0;
  border-radius: 6px;
  transition: all 0.2s;

  &:first-child&[data-state="on"] {
    background: #4ab444;
    color: ${(props) => props.theme["text-white"]};
  }

  &:last-child&[data-state="on"] {
    background: #bc1421;
    color: ${(props) => props.theme["text-white"]};
  }
`;
