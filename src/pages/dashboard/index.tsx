import { MenuHeaderLayout } from "@/layouts/menuLayout";
import { api } from "@/services/api";
import { DashboardContainer } from "@/styles/dashboard/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image"

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
                width={32}
                height={32}
              />
            </div>
            <select name="walltes" id="">
              <option value="walltes">Carteira Jhonata</option>
              <option value="walltes">Carteira Letícia</option>
            </select>
            <span>R$1.500,00</span>
          </div>
          <button>Novo lançamento</button>
        </header>
      </DashboardContainer>
    </>
  )
}

Dashboard.PageLayout = MenuHeaderLayout;