import { MenuHeaderLayout } from "@/layouts/menuLayout";
import { api } from "@/services/api";
import { DashboardContainer, DeleteModal, DropDownMenuContent, DropDownMenuItem, EditNewTransactionModal, NewTransactionModal, PayOffModal, ToggleGroupContainer, ToggleGroupItem, TransactionModal } from "@/styles/dashboard/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image"
import { Listbox } from '@headlessui/react'
import { CaretLeft, CheckFat, Clock, DotsThree, Eraser, PencilSimple, Receipt, Wallet, X } from "@phosphor-icons/react";
import Modal from "react-modal";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { ContainerSpinner } from "@/styles/spinner/styles";

interface UserProps {
  id: number;
  name: string;
  email: string;
  picture: string;
  created_at: string;
}

function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  return String(currentYear);
}
function getCurrentMonth() {
  const currentMonth = new Date().getMonth() + 1;
  return currentMonth;
}

const wallets = [
  { id: 1, title: 'Carteira Jhonata' },
  { id: 2, title: 'Carteira Familia' },
  { id: 3, title: 'Carteira Poupança' },
  { id: 4, title: 'Carteira Kiara' },
]

const currentMonth = getCurrentMonth();
const year = getCurrentYear();
const monthCurrentYear = [
  { id: 1, title: 'Janeiro', ano: year },
  { id: 2, title: 'Fevereiro', ano: year },
  { id: 3, title: 'Março', ano: year },
  { id: 4, title: 'Abril', ano: year },
  { id: 5, title: 'Maio', ano: year },
  { id: 6, title: 'Junho', ano: year },
  { id: 7, title: 'Julho', ano: year },
  { id: 8, title: 'Agosto', ano: year },
  { id: 9, title: 'Setembro', ano: year },
  { id: 10, title: 'Outubro', ano: year },
  { id: 11, title: 'Novembro', ano: year },
  { id: 12, title: 'Dezembro', ano: year },
]

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserProps>();
  const [newTransacitonModalIsOpen, setNewTransacitonModalIsOpen] = useState(false);
  const [editNewTransacitonModalIsOpen, setEditNewTransacitonModalIsOpen] = useState(false);
  const [transactionModalIsOpen, setTransactionModalIsOpen] = useState(false);
  const [payOffModalIsOpen, setPayOffModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(wallets[0])
  const startMonth = monthCurrentYear.find((month) => month.id === currentMonth);
  const [selectedMonth, setSelectedMonth] = useState(startMonth ? startMonth : monthCurrentYear[0]);

  function handleNewTransactionModalOpen() {
    setNewTransacitonModalIsOpen(true);
  }
  function handleNewTransactionModalClose() {
    setNewTransacitonModalIsOpen(false);
  }

  function handleEditNewTransactionModalOpen() {
    setEditNewTransacitonModalIsOpen(true);
  }
  function handleEditNewTransactionModalClose() {
    setEditNewTransacitonModalIsOpen(false);
  }

  function handleTransactionModalOpen() {
    setTransactionModalIsOpen(true);
  }
  function handleTransactionModalClose() {
    setTransactionModalIsOpen(false);
  }

  function handlePayOffModalOpen() {
    setPayOffModalIsOpen(true);
  }
  function handlePayOffModalClose() {
    setPayOffModalIsOpen(false);
  }

  function handleDeleteModalOpen() {
    setDeleteModalIsOpen(true);
  }
  function handleDeleteModalClose() {
    setDeleteModalIsOpen(false);
  }

  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
      try {
        const response = await api.get('/authenticated');
        const { authenticated, user } = response.data;
        if (authenticated) {
          setUser(user);
          setLoading(false);
        } else {
          router.push('/login');
          setLoading(false);
        }
      } catch (error) {
        router.push('/login');
        console.log(error);
      }
    };

    fetchAuthenticationStatus();
  }, [router]);


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
      <DashboardContainer>
        <header>
          <div className="left-content">
            <div className="picture-content">
              <Image
                className='profile-picture'
                src={user?.picture ? user.picture : '/images/logo.png'}
                alt='logo myFinance'
                width={42}
                height={42}
              />
            </div>
            <Listbox value={selectedWallet} onChange={setSelectedWallet}>
              <Listbox.Button className="styled-select-button">
                {selectedWallet.title}
                <CaretLeft size={24} />
              </Listbox.Button>
              <Listbox.Options className="styled-select-options">
                {wallets.map((wallet) => (
                  <Listbox.Option
                    key={wallet.id}
                    value={wallet}
                  >
                    {wallet.title}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
            <span>R$1.500,00</span>
          </div>
          <button className="new-release" onClick={handleNewTransactionModalOpen}>Novo lançamento</button>
        </header>
        <section className="date-content">
          <span>{selectedMonth.title}/{selectedMonth.ano}</span>
          <Listbox value={selectedMonth} onChange={setSelectedMonth}>
            <Listbox.Button className="styled-select-button">
              {selectedMonth.title}/{selectedMonth.ano}
              <CaretLeft size={24} />
            </Listbox.Button>
            <Listbox.Options className="styled-select-options">
              {monthCurrentYear.map((month) => (
                <Listbox.Option
                  key={month.id}
                  value={month}
                >
                  {month.title}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </section>
        <section className="transactions-content">
          <article className="card">
            <div className="icon">
              <Wallet size={24} />
            </div>
            <div className="info">
              <span>Pagamentos</span>
              <p>- R$4.500,00</p>
            </div>
          </article>
          <article className="card">
            <div className="icon">
              <Receipt size={24} />
            </div>
            <div className="info">
              <span>Recebimentos</span>
              <p>- R$1.200,00</p>
            </div>
          </article>
          <article className="card">
            <div className="icon">
              <Clock size={24} />
            </div>
            <div className="info">
              <span>Pendentes</span>
              <p>- R$2.521,27</p>
            </div>
          </article>
        </section>
        <section className="table-container">
          <div className="table-header-container">
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Categoria</th>
                  <th>Valor</th>
                  <th>Tipo</th>
                  <th>Lançado por</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="table-body-container">
            <table>
              <tbody>
                <tr onClick={(e) => { e.stopPropagation(); handleTransactionModalOpen(); }}>
                  <td>07/09/2022, 06:31</td>
                  <td>Empréstimo Banco</td>
                  <td>R$1.200,00</td>
                  <td>Pagamento</td>
                  <td>Jhonata</td>
                  <td><span>Paga</span></td>
                  <td>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger className="DropDownMenuButton" asChild>
                        <button aria-label="Mais opções">
                          <DotsThree size={28} />
                        </button>
                      </DropdownMenu.Trigger>

                      <DropdownMenu.Portal>
                        <DropDownMenuContent>
                          <DropDownMenuItem asChild>
                            <button className="dropDownMenu-pay-off" aria-label="Quitar" onClick={(e) => {
                              e.stopPropagation();
                              handlePayOffModalOpen();
                            }}>
                              Quitar
                              <CheckFat size={18} weight="fill" />
                            </button>
                          </DropDownMenuItem>
                          <DropDownMenuItem asChild>
                            <button className="dropDownMenu-edit" aria-label="Editar" onClick={(e) => {
                              e.stopPropagation();
                              handleEditNewTransactionModalOpen();
                            }}>
                              Editar
                              <PencilSimple size={18} weight="fill" />
                            </button>
                          </DropDownMenuItem>
                          <DropDownMenuItem asChild>
                            <button className="dropDownMenu-erase" aria-label="Apagar" onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteModalOpen();
                            }}>
                              Apagar
                              <Eraser size={18} weight="fill" />
                            </button>
                          </DropDownMenuItem>
                        </DropDownMenuContent>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                  </td>
                </tr>
                <tr>
                  <td>07/09/2022, 06:31</td>
                  <td>Empréstimo Banco</td>
                  <td>R$1.200,00</td>
                  <td>Pagamento</td>
                  <td>Jhonata</td>
                  <td><span>Paga</span></td>
                  <td>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger className="DropDownMenuButton" asChild>
                        <button aria-label="Mais opções">
                          <DotsThree size={28} />
                        </button>
                      </DropdownMenu.Trigger>

                      <DropdownMenu.Portal>
                        <DropDownMenuContent>
                          <DropDownMenuItem asChild>
                            <button className="dropDownMenu-edit" aria-label="Editar" onClick={(e) => {
                              e.stopPropagation();
                              console.log("Editando")
                            }}>
                              Editar
                              <PencilSimple size={18} weight="fill" />
                            </button>
                          </DropDownMenuItem>
                          <DropDownMenuItem asChild>
                            <button className="dropDownMenu-erase" aria-label="Apagar" onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteModalOpen();
                            }}>
                              Apagar
                              <Eraser size={18} weight="fill" />
                            </button>
                          </DropDownMenuItem>
                        </DropDownMenuContent>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-footer-container" />
        </section>
      </DashboardContainer>

      <Modal
        isOpen={newTransacitonModalIsOpen}
        onRequestClose={handleNewTransactionModalClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <NewTransactionModal>
          <header>
            <h2>Novo lançamento</h2>
            <button onClick={handleNewTransactionModalClose}>
              <X size={24} />
            </button>
          </header>
          <form>
            <fieldset className="input-global">
              <label>Descrição</label>
              <input type="text" name="new-description" placeholder="Ex. Pagamento energia elétrica" />
            </fieldset>
            <fieldset className="input-toggle">
              <ToggleGroupContainer type="single" defaultValue="cost">
                <ToggleGroupItem value="income">
                  Receita
                </ToggleGroupItem>
                <ToggleGroupItem value="cost">
                  Despesa
                </ToggleGroupItem>
              </ToggleGroupContainer>
            </fieldset>
            <fieldset className="input-global">
              <label>Categoria</label>
              <input type="text" name="new-category" placeholder="Selecione uma categoria" />
            </fieldset>
            <div className="fieldset-flex">
              <fieldset className="input-global">
                <label>Vencimento</label>
                <input type="text" name="new-deadline" placeholder="Ex. 31/12/2028" />
              </fieldset>
              <fieldset className="input-global">
                <label>Parcelas</label>
                <input type="text" name="new-parcel" placeholder="00" />
              </fieldset>
            </div>

            <fieldset className="input-global">
              <label>Valor</label>
              <input type="text" name="new-value" placeholder="R$0,00" />
            </fieldset>
            <footer>
              <button className="close" type="button" onClick={handleNewTransactionModalClose}>Cancelar</button>
              <button className="register" type="button" onClick={() => console.log('Cadastrado')}>Cadastrar</button>
            </footer>
          </form>
        </NewTransactionModal>
      </Modal>

      <Modal
        isOpen={editNewTransacitonModalIsOpen}
        onRequestClose={handleEditNewTransactionModalClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <EditNewTransactionModal>
          <header>
            <h2>Editar lançamento</h2>
            <button onClick={handleEditNewTransactionModalClose}>
              <X size={24} />
            </button>
          </header>
          <form>
            <fieldset className="input-global">
              <label>Descrição</label>
              <input type="text" name="edit-new-description" placeholder="Ex. Pagamento energia elétrica" />
            </fieldset>
            <fieldset className="input-toggle">
              <ToggleGroupContainer type="single" defaultValue="cost">
                <ToggleGroupItem value="income">
                  Receita
                </ToggleGroupItem>
                <ToggleGroupItem value="cost">
                  Despesa
                </ToggleGroupItem>
              </ToggleGroupContainer>
            </fieldset>
            <fieldset className="input-global">
              <label>Categoria</label>
              <input type="text" name="edit-new-category" placeholder="Selecione uma categoria" />
            </fieldset>
            <div className="fieldset-flex">
              <fieldset className="input-global">
                <label>Vencimento</label>
                <input type="text" name="edit-new-deadline" placeholder="Ex. 31/12/2028" />
              </fieldset>
              <fieldset className="input-global">
                <label>Parcelas</label>
                <input type="text" name="edit-new-parcel" placeholder="00" />
              </fieldset>
            </div>

            <fieldset className="input-global">
              <label>Valor</label>
              <input type="text" name="edit-new-value" placeholder="R$0,00" />
            </fieldset>
            <footer>
              <button className="close-edit" type="button" onClick={handleEditNewTransactionModalClose}>Cancelar</button>
              <button className="save-transaction" type="button" onClick={() => console.log('Salvando')}>Salvar</button>
            </footer>
          </form>
        </EditNewTransactionModal>
      </Modal>

      <Modal
        isOpen={transactionModalIsOpen}
        onRequestClose={handleTransactionModalClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <TransactionModal>
          <header>
            <h2>Mais informações</h2>
            <button onClick={handleTransactionModalClose}>
              <X size={24} />
            </button>
          </header>
          <form>
            <fieldset className="input-global">
              <label>Descrição</label>
              <input type="text" name="description" value="Ração para a Kiara" readOnly />
            </fieldset>
            <fieldset className="input-global">
              <label>Categoria</label>
              <input type="text" name="category" value="Kiara" readOnly />
            </fieldset>
            <div className="fieldset-flex">
              <fieldset className="input-global">
                <label>Valor</label>
                <input type="text" name="amount" value="R$158,00" readOnly />
              </fieldset>
              <fieldset className="input-global">
                <label>Parcelas restantes</label>
                <input type="text" name="parcelsMissing" value="00" readOnly />
              </fieldset>
            </div>
            <div className="fieldset-flex">
              <fieldset className="input-global">
                <label>Data</label>
                <input type="text" name="date" value="31/05/2023" readOnly />
              </fieldset>
              <fieldset className="input-global">
                <label>Hora</label>
                <input type="text" name="hour" value="10:51:32" readOnly />
              </fieldset>
            </div>
            <div className="fieldset-flex">
              <fieldset className="input-global">
                <label>Lançado por</label>
                <input type="text" name="releasedBy" value="Jhonata Nogueira" readOnly />
              </fieldset>
              <fieldset className="input-global">
                <label>Carteira</label>
                <input type="text" name="hour" value="Carteira Jhonata" readOnly />
              </fieldset>
            </div>
            <div className="fieldset-flex">
              <fieldset className="input-type">
                <label>Tipo</label>
                <span>Receita</span>
              </fieldset>
              <fieldset className="input-status">
                <label>Status</label>
                <span>Recebido</span>
              </fieldset>
            </div>
            <button type="button" onClick={handleTransactionModalClose}>Voltar</button>
          </form>
        </TransactionModal>
      </Modal>

      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={handleDeleteModalClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <DeleteModal>
          <h2>Apagar transação?</h2>
          <p>Você tem certeza que deseja apagar essa transação?</p>
          <footer>
            <button className="confirm-delete" type="button" onClick={() => console.log('Deletado')}>Deletar</button>
            <button className="cancel-delete" type="button" onClick={handleDeleteModalClose}>Cancelar</button>
          </footer>
        </DeleteModal>
      </Modal>

      <Modal
        isOpen={payOffModalIsOpen}
        onRequestClose={handlePayOffModalClose}
        ariaHideApp={false}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <PayOffModal>
          <h2>Quitar transação?</h2>
          <p>Você tem certeza que deseja quitar essa transação?</p>
          <footer>
            <button className="confirm-pay-off" type="button" onClick={() => console.log('Quitando')}>Quitar</button>
            <button className="cancel-pay-off" type="button" onClick={handlePayOffModalClose}>Cancelar</button>
          </footer>
        </PayOffModal>
      </Modal>
    </>
  )
}

Dashboard.PageLayout = MenuHeaderLayout;