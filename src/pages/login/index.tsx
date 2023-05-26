import { DefaultLayout } from "@/layouts/default";
import { LoginContainer } from "@/styles/login/styles";
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="author" content="Jhonata Nogueira" />
        <meta name="creator" content="Jhonata Nogueira" />
        <meta name="title" content="Login" />
      </Head>

      <LoginContainer>
        <h1>Login</h1>
      </LoginContainer>
    </>
  )
}

Login.PageLayout = DefaultLayout