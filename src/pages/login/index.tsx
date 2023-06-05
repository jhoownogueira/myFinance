import { DefaultLayout } from "@/layouts/default";
import { LoginContainer } from "@/styles/login/styles";
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { api } from "@/services/api";
import { ContainerSpinner } from "@/styles/spinner/styles";
import Cookies from 'js-cookie';

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    const refresh_token = Cookies.get('refresh_token');
    const fetchAuthenticationStatus = async () => {
      try {
        //   const response = await api.get('/authenticated');
        const response = await api.post('/authenticated', { token, refresh_token });
        if (response.data.authenticated) {
          setAuthenticated(true);
          router.push('/dashboard');
        } else {
          alert('Por favor, insira suas credenciais.');
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchAuthenticationStatus();
  }, [router]);


  function submitLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/dashboard');
  }

  function loginWithGoogle() {
    const googleAuthUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;

    const popupWindow = window.open(googleAuthUrl, '_blank');

    window.addEventListener('message', (event) => {
      // Verifique se a origem do evento é confiável
      if (event.origin !== process.env.NEXT_PUBLIC_API_URL) {
        return;
      }
      const token = event.data.token;
      const refreshToken = event.data.refresh_token;
      if (token && refreshToken) {
        const expirationHour = 5; // (5:00 AM)
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7); // 7 days from now
        expirationDate.setHours(expirationHour, 0, 0, 0);

        Cookies.set('token', token, { expires: expirationDate });
        Cookies.set('refresh_token', refreshToken, { expires: expirationDate });
        router.push('/dashboard');
      }
    }, false);
  }



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
      <Head>
        <title>Login</title>
        <meta name="author" content="Jhonata Nogueira" />
        <meta name="creator" content="Jhonata Nogueira" />
        <meta name="title" content="Login" />
      </Head>

      <LoginContainer>
        <Image
          className='logo'
          src='/images/logo_medium.svg'
          alt='logo myFinance'
          width={58.98}
          height={90.44}
        />
        <main>
          <h1>Acessar</h1>
          <span>Digite o seu usuário e senha</span>
          <form onSubmit={submitLogin}>
            <div className="inputs">
              <input type="text" placeholder="Usuário" />
              <input type="password" placeholder="Senha" />
            </div>
            <div className="separation">
              <span>Ou continue com</span>
              <div className="hr"></div>
            </div>
            <button type="button" className="google" onClick={loginWithGoogle}>Login With Google</button>
            <button type="submit">Entrar</button>
          </form>
        </main>
      </LoginContainer>
    </>
  )
}

Login.PageLayout = DefaultLayout;
