import { MenuHeaderLayout } from "@/layouts/menuLayout";
import { api } from "@/services/api";
import { DashboardContainer, DropDownMenuContent, DropDownMenuItem } from "@/styles/dashboard/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image"
import { Listbox } from '@headlessui/react'
import { CaretLeft, Clock, DotsThree, Eraser, PencilSimple, Receipt, Wallet } from "@phosphor-icons/react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface UserProps {
  id: number;
  name: string;
  email: string;
  picture: string;
  created_at: string;
}

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserProps>();
  const router = useRouter();

  const wallets = [
    { id: 1, title: 'Carteira Jhonata' },
    { id: 2, title: 'Carteira Familia' },
    { id: 3, title: 'Carteira Poupança' },
    { id: 4, title: 'Carteira Kiara' },
  ]

  function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return String(currentYear);
  }

  function getCurrentMonth() {
    const currentMonth = new Date().getMonth() + 1;
    return currentMonth;
  }

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

  const [selectedWallet, setSelectedWallet] = useState(wallets[0])
  const startMonth = monthCurrentYear.find((month) => month.id === currentMonth);
  const [selectedMonth, setSelectedMonth] = useState(startMonth ? startMonth : monthCurrentYear[0]);


  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
      try {
        const response = await api.get('/autenticated');
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
    return <div>Loading...</div>;
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
          <button className="new-release">Novo lançamento</button>
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
                <tr onClick={() => console.log('Cliquei na table')}>
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
                            <button className="dropDownMenu-edit" aria-label="Editar">
                              Editar
                              <PencilSimple size={18} weight="fill" />
                            </button>
                          </DropDownMenuItem>
                          <DropDownMenuItem asChild>
                            <button className="dropDownMenu-erase" aria-label="Apagar">
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
                            <button className="dropDownMenu-edit" aria-label="Editar">
                              Editar
                              <PencilSimple size={18} weight="fill" />
                            </button>
                          </DropDownMenuItem>
                          <DropDownMenuItem asChild>
                            <button className="dropDownMenu-erase" aria-label="Apagar">
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
    </>
  )
}

Dashboard.PageLayout = MenuHeaderLayout;