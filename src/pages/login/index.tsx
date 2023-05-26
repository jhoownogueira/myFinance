import { DefaultLayout } from "@/layouts/default";
import { LoginContainer } from "@/styles/login/styles";
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import { FormEvent } from "react";
import axios from 'axios';
import { api } from "@/services/api";

export default function Login() {
  const router = useRouter();

  function submitLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/dashboard');
  }

  function loginWithGoogle() {
    // URL da autenticação do Google
    const googleAuthUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
    // Redirecionar o usuário para a página de autenticação do Google
    window.location.href = googleAuthUrl;
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
