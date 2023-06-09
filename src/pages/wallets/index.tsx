import { MenuHeaderLayout } from "@/layouts/menuLayout";
import {
  WalletContainer,
  EditWalletModal,
  ToggleGroupContainer,
  ToggleGroupItem,
  EditSharedWalletModal,
  RegisterWalletModal,
} from "@/styles/wallets/styles";
import { useRouter } from "next/router";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Trash, X } from "@phosphor-icons/react";
import Modal from "react-modal";
import { ContainerSpinner } from "@/styles/spinner/styles";
import { AuthContext } from "@/context/authContext";

export default function Wallets() {
  const router = useRouter();
  const { loading, setLoading, refreshUser } = useContext(AuthContext);
  const [registerWalletModalIsOpen, setRegisterWalletModalIsOpen] =
    useState(false);
  const [editWalletModalIsOpen, setEditWalletModalIsOpen] = useState(false);
  const [editSharedWalletModalIsOpen, setSharedEditWalletModalIsOpen] =
    useState(false);

  function handleEditWalletModalOpen() {
    setEditWalletModalIsOpen(true);
  }
  function handleEditWalletModalClose() {
    setEditWalletModalIsOpen(false);
  }

  function handleEditSharedWalletModalOpen() {
    setSharedEditWalletModalIsOpen(true);
  }
  function handleEditSharedWalletModalClose() {
    setSharedEditWalletModalIsOpen(false);
  }

  function handleRegisterWalletModalOpen() {
    setRegisterWalletModalIsOpen(true);
  }
  function handleRegisterWalletModalClose() {
    setRegisterWalletModalIsOpen(false);
  }

  useEffect(() => {
    refreshUser().then((isUserAuthenticated) => {
      if (isUserAuthenticated) {
        setLoading(false);
      } else {
        setLoading(true);
        router.push("/login");
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <>
        <ContainerSpinner>
          <span className="loader"></span>
        </ContainerSpinner>
      </>
    );
  }

  return (
    <>
      <WalletContainer>
        <header>
          <div className="left-content">
            <h1>Minhas carteiras</h1>
          </div>
          <div className="right-content">
            <button onClick={handleRegisterWalletModalOpen}>Carteira +</button>
          </div>
        </header>

        <section className="table-container">
          <div className="table-header-container">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Saldo atual</th>
                  <th>Status</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="table-body-container">
            <table>
              <tbody>
                <tr
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditWalletModalOpen();
                  }}
                >
                  <td>Carteira Jhonata</td>
                  <td>Pessoal</td>
                  <td>R$1.200,00</td>
                  <td>
                    <span>Ativa</span>
                  </td>
                </tr>
                <tr
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditSharedWalletModalOpen();
                  }}
                >
                  <td>Carteira Familia</td>
                  <td>Compartilhada Comigo</td>
                  <td>R$1.200,00</td>
                  <td>
                    <span>Ativa</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-footer-container" />
        </section>
      </WalletContainer>

      <Modal
        isOpen={registerWalletModalIsOpen}
        onRequestClose={handleRegisterWalletModalClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <RegisterWalletModal>
          <header>
            <h2>Nova carteira</h2>
            <button onClick={handleRegisterWalletModalClose}>
              <X size={24} />
            </button>
          </header>
          <form>
            <fieldset className="input-global">
              <label>Nome</label>
              <input type="text" name="name" placeholder="Nome da carteira" />
            </fieldset>
            <fieldset className="input-toggle">
              <label>Tipo</label>
              <ToggleGroupContainer type="single" defaultValue="private">
                <ToggleGroupItem value="private">Privada</ToggleGroupItem>
                <ToggleGroupItem value="shared">Compartilhada</ToggleGroupItem>
              </ToggleGroupContainer>
            </fieldset>

            <div className="input-container-row">
              <fieldset className="input-global">
                <label>E-mail convidado</label>
                <input
                  type="text"
                  name="edit-invited-email"
                  placeholder="Digite o e-mail do convidado"
                />
              </fieldset>
              <button type="button" className="add-invite-email">
                Add +
              </button>
            </div>

            <div className="people-shared-container">
              <div className="people-shared">
                <div className="people-info">
                  <Image
                    className="logo"
                    src="https://github.com/jhoownogueira.png"
                    alt="photo-people-shared"
                    width={32}
                    height={32}
                  />
                  <span>Jhonata Nogueira</span>
                </div>
                <button type="button" className="remove-people-shared">
                  <Trash size={20} />
                </button>
              </div>
            </div>

            <footer>
              <button
                className="close-edit"
                type="button"
                onClick={handleRegisterWalletModalClose}
              >
                Cancelar
              </button>
              <button
                className="save-transaction"
                type="button"
                onClick={() => console.log("Salvando")}
              >
                Cadastrar
              </button>
            </footer>
          </form>
        </RegisterWalletModal>
      </Modal>

      <Modal
        isOpen={editWalletModalIsOpen}
        onRequestClose={handleEditWalletModalClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <EditWalletModal>
          <header>
            <h2>Editar Carteira</h2>
            <button onClick={handleEditWalletModalClose}>
              <X size={24} />
            </button>
          </header>
          <form>
            <fieldset className="input-global">
              <label>Nome</label>
              <input type="text" name="edit-name" value="Carteira Jhonata" />
            </fieldset>
            <fieldset className="input-toggle">
              <label>Tipo</label>
              <ToggleGroupContainer type="single" defaultValue="private">
                <ToggleGroupItem value="private">Privada</ToggleGroupItem>
                <ToggleGroupItem value="shared">Compartilhada</ToggleGroupItem>
              </ToggleGroupContainer>
            </fieldset>

            <div className="input-container-row">
              <fieldset className="input-global">
                <label>E-mail convidado</label>
                <input
                  type="text"
                  name="edit-invited-email"
                  placeholder="Digite o e-mail do convidado"
                />
              </fieldset>
              <button type="button" className="add-invite-email">
                Add +
              </button>
            </div>

            <div className="people-shared-container">
              <div className="people-shared">
                <div className="people-info">
                  <Image
                    className="logo"
                    src="https://github.com/jhoownogueira.png"
                    alt="photo-people-shared"
                    width={32}
                    height={32}
                  />
                  <span>Jhonata Nogueira</span>
                </div>
                <button type="button" className="remove-people-shared">
                  <Trash size={20} />
                </button>
              </div>
            </div>

            <fieldset className="input-toggle">
              <label>Status</label>
              <ToggleGroupContainer type="single" defaultValue="active">
                <ToggleGroupItem value="active">Ativa</ToggleGroupItem>
                <ToggleGroupItem value="inactive">Desativada</ToggleGroupItem>
                <ToggleGroupItem value="exclude">
                  Excluir
                  <Trash size={16} />
                </ToggleGroupItem>
              </ToggleGroupContainer>
            </fieldset>

            <footer>
              <button
                className="close-edit"
                type="button"
                onClick={handleEditWalletModalClose}
              >
                Cancelar
              </button>
              <button
                className="save-transaction"
                type="button"
                onClick={() => console.log("Salvando")}
              >
                Salvar
              </button>
            </footer>
          </form>
        </EditWalletModal>
      </Modal>

      <Modal
        isOpen={editSharedWalletModalIsOpen}
        onRequestClose={handleEditSharedWalletModalClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <EditSharedWalletModal>
          <header>
            <h2>Sair da carteira</h2>
            <button onClick={handleEditSharedWalletModalClose}>
              <X size={24} />
            </button>
          </header>
          <form>
            <article>
              <p>Essa carteira foi compartilhada com você.</p>
              <p>
                Você deseja <span>sair</span> do uso compartilhado com{" "}
                <strong>Jhonata Nogueira</strong>?
              </p>
            </article>

            <footer>
              <button
                className="close-edit"
                type="button"
                onClick={handleEditSharedWalletModalClose}
              >
                Não
              </button>
              <button
                className="save-transaction"
                type="button"
                onClick={() => console.log("Salvando")}
              >
                Sim, sair!
              </button>
            </footer>
          </form>
        </EditSharedWalletModal>
      </Modal>
    </>
  );
}

Wallets.PageLayout = MenuHeaderLayout;
