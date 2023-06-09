import styled from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const WalletContainer = styled.section`
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
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .right-content {
      button {
        height: 2.5rem;
        border-radius: 8px;
        padding: 0 2rem;
        border: none;
        outline: none;
        background: ${(props) => props.theme.secondary};
        transition: all 0.2s;

        &:hover {
          background: ${(props) => props.theme.primary};
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
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
      }

      th:nth-child(2),
      td:nth-child(2) {
        min-width: 200px;
        max-width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
      }

      th:nth-child(3),
      td:nth-child(3) {
        min-width: 150px;
        max-width: 150px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
      }

      th:nth-child(4),
      td:nth-child(4) {
        min-width: 130px;
        max-width: 130px;
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

  @media (max-width: 480px) {
    height: auto;
    header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      height: auto;

      .left-content {
        flex-direction: column-reverse;
        align-items: flex-start;
      }

      .right-content {
        width: 100%;
        button {
          width: 100%;
        }
      }
    }

    section.table-container {
      table {

        th:nth-child(2),
        td:nth-child(2) {
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

export const RegisterWalletModal = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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
    gap: 1.5rem;

    fieldset.input-toggle {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      width: 100%;
      outline: 0;
      border: 0;

      label {
        width: 100%;
        font-size: 0.875rem;
        color: ${(props) => props.theme["primary"]};
      }
    }

    div.input-container-row {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 0.25rem;

      button.add-invite-email {
        width: 100px;
        height: 2.5rem;
        border: none;
        outline: none;
        border-radius: 4px;
        background: ${(props) => props.theme["secondary"]};

        &:hover {
          background: ${(props) => props.theme["primary"]};
        }
      }
    }

    div.people-shared-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .people-shared {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid ${(props) => props.theme["hr"]};
        padding: 0.5rem 0;

        .people-info {
          display: flex;
          align-items: center;
          gap: 1rem;

          img {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
          }

          span {
            font-size: 0.875rem;
          }
        }

        button.remove-people-shared {
          width: 2rem;
          height: 2rem;
          border: none;
          outline: none;
          background: transparent;
          transition: all 0.2s;

          &:hover {
            color: ${(props) => props.theme["primary"]};
          }
        }
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: end;
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
        width: 9rem;
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
        width: 10rem;
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
export const EditWalletModal = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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
    gap: 1.5rem;

    fieldset.input-toggle {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      width: 100%;
      outline: 0;
      border: 0;

      label {
        width: 100%;
        font-size: 0.875rem;
        color: ${(props) => props.theme["primary"]};
      }
    }

    div.input-container-row {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 0.25rem;

      button.add-invite-email {
        width: 100px;
        height: 2.5rem;
        border: none;
        outline: none;
        border-radius: 4px;
        background: ${(props) => props.theme["secondary"]};

        &:hover {
          background: ${(props) => props.theme["primary"]};
        }
      }
    }

    div.people-shared-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .people-shared {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid ${(props) => props.theme["hr"]};
        padding: 0.5rem 0;

        .people-info {
          display: flex;
          align-items: center;
          gap: 1rem;

          img {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
          }

          span {
            font-size: 0.875rem;
          }
        }

        button.remove-people-shared {
          width: 2rem;
          height: 2rem;
          border: none;
          outline: none;
          background: transparent;
          transition: all 0.2s;

          &:hover {
            color: ${(props) => props.theme["primary"]};
          }
        }
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: end;
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
        width: 9rem;
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
        width: 10rem;
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
export const EditSharedWalletModal = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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
    gap: 1.5rem;

    article {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      p {
        span {
          color: ${(props) => props.theme["primary"]};
        }
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: end;
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
        width: 9rem;
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
        width: 10rem;
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

  &:first-child&[data-state="on"],
  &:nth-child(2)&[data-state="on"] {
    background: ${(props) => props.theme["secondary"]};
    color: ${(props) => props.theme["text-white"]};
  }

  &:nth-child(3)&[data-state="off"] {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }

  &:nth-child(3)&[data-state="on"] {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    background: ${(props) => props.theme["status-red"]};
    color: ${(props) => props.theme["text-white"]};
  }
`;
