import { MenuHeaderLayout } from "@/layouts/menuLayout";
import { api } from "@/services/api";
import { DashboardContainer } from "@/styles/dashboard/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image"
import { Listbox } from '@headlessui/react'
import { CaretDown, CaretLeft, CaretUp } from "@phosphor-icons/react";

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
    { id: 1, title: 'Carteira Jhonata'},
    { id: 2, title: 'Carteira Familia'},
    { id: 3, title: 'Carteira Poupança'},
    { id: 4, title: 'Carteira Kiara' },
  ]

  const [selectedWallet, setSelectedWallet] = useState(wallets[0])


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
      </DashboardContainer>
    </>
  )
}

Dashboard.PageLayout = MenuHeaderLayout;