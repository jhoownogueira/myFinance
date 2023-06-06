import { MenuHeaderLayout } from "@/layouts/menuLayout";
import {
  PaymentContainer,
  TransactionModal,
} from "@/styles/payments/styles";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import {
  CaretLeft,
  Clock,
  Coins,
  Receipt,
  Wallet,
  X,
} from "@phosphor-icons/react";
import Modal from "react-modal";
import { ContainerSpinner } from "@/styles/spinner/styles";
import { AuthContext } from "@/context/authContext";
import { getCurrentMonth, getCurrentYear } from "@/utils/getYearsAndMonth";

const wallets = [
  { id: 1, title: "Carteira Jhonata" },
  { id: 2, title: "Carteira Familia" },
  { id: 3, title: "Carteira Poupança" },
  { id: 4, title: "Carteira Kiara" },
];

const currentMonth = getCurrentMonth();
const year = getCurrentYear();
const monthCurrentYear = [
  { id: 1, title: "Janeiro", ano: year },
  { id: 2, title: "Fevereiro", ano: year },
  { id: 3, title: "Março", ano: year },
  { id: 4, title: "Abril", ano: year },
  { id: 5, title: "Maio", ano: year },
  { id: 6, title: "Junho", ano: year },
  { id: 7, title: "Julho", ano: year },
  { id: 8, title: "Agosto", ano: year },
  { id: 9, title: "Setembro", ano: year },
  { id: 10, title: "Outubro", ano: year },
  { id: 11, title: "Novembro", ano: year },
  { id: 12, title: "Dezembro", ano: year },
];

export default function Payments() {
  const router = useRouter();
  const { loading, setLoading, refreshUser } = useContext(AuthContext);
  const [transactionModalIsOpen, setTransactionModalIsOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(wallets[0]);
  const startMonth = monthCurrentYear.find(
    (month) => month.id === currentMonth
  );
  const [selectedMonth, setSelectedMonth] = useState(
    startMonth ? startMonth : monthCurrentYear[0]
  );

  function handleTransactionModalOpen() {
    setTransactionModalIsOpen(true);
  }
  function handleTransactionModalClose() {
    setTransactionModalIsOpen(false);
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
      <PaymentContainer>
        <header>
          <div className="left-content">
            <div className="picture-content">
            <Coins size={24} weight="fill" />
            </div>
            <Listbox value={selectedWallet} onChange={setSelectedWallet}>
              <Listbox.Button className="styled-select-button">
                {selectedWallet.title}
                <CaretLeft size={24} />
              </Listbox.Button>
              <Listbox.Options className="styled-select-options">
                {wallets.map((wallet) => (
                  <Listbox.Option key={wallet.id} value={wallet}>
                    {wallet.title}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
          <div className="right-content">
          <Listbox value={selectedMonth} onChange={setSelectedMonth}>
            <Listbox.Button className="styled-select-button">
              {selectedMonth.title}/{selectedMonth.ano}
              <CaretLeft size={24} />
            </Listbox.Button>
            <Listbox.Options className="styled-select-options">
              {monthCurrentYear.map((month) => (
                <Listbox.Option key={month.id} value={month}>
                  {month.title}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
          </div>
        </header>
        <section className="transactions-content">
          <article className="card">
            <div className="icon">
              <Wallet size={24} />
            </div>
            <div className="info">
              <span>Efetuados</span>
              <p>- R$4.500,00</p>
            </div>
          </article>
          <article className="card">
            <div className="icon">
              <Receipt size={24} />
            </div>
            <div className="info">
              <span>Pendentes</span>
              <p>- R$1.200,00</p>
            </div>
          </article>
          <article className="card">
            <div className="icon">
              <Clock size={24} />
            </div>
            <div className="info">
              <span>Saldo Final</span>
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
                  <th>Lançado por</th>
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
                    handleTransactionModalOpen();
                  }}
                >
                  <td>07/09/2022, 06:31</td>
                  <td>Empréstimo Banco</td>
                  <td>R$1.200,00</td>
                  <td>Jhonata</td>
                  <td>
                    <span>Recebido</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-footer-container" />
        </section>
      </PaymentContainer>

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
              <input
                type="text"
                name="description"
                value="Ração para a Kiara"
                readOnly
              />
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
                <input
                  type="text"
                  name="releasedBy"
                  value="Jhonata Nogueira"
                  readOnly
                />
              </fieldset>
              <fieldset className="input-global">
                <label>Carteira</label>
                <input
                  type="text"
                  name="hour"
                  value="Carteira Jhonata"
                  readOnly
                />
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
            <button type="button" onClick={handleTransactionModalClose}>
              Voltar
            </button>
          </form>
        </TransactionModal>
      </Modal>
    </>
  );
}

Payments.PageLayout = MenuHeaderLayout;
