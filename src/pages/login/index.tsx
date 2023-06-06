import { DefaultLayout } from "@/layouts/default";
import { LoginContainer } from "@/styles/login/styles";
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ContainerSpinner } from "@/styles/spinner/styles";
import Cookies from 'js-cookie';
import { AuthContext } from "@/context/authContext";

export default function Login() {
  const { loading, setLoading, refreshUser } = useContext(AuthContext)
  const router = useRouter();
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

  useEffect(() => {
    setLoading(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    refreshUser().then((isUserAuthenticated) => {

      if (isUserAuthenticated) {
        setLoading(true);
        router.push('/dashboard');
      } else {
        setLoading(false);
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
          width={128}
          height={128}
        />
        <main>
          <h1>Login</h1>
          <span>Entre com a sua conta do Google.</span>
          <form>
            <button
              type="button"
              className="google"
              onClick={loginWithGoogle}>
              <div className="google-logo">
                <Image
                  src='/icons/google.svg'
                  alt='logo google'
                  width={30}
                  height={30}
                />
              </div>
              Fazer login com o Google
            </button>
          </form>
        </main>
      </LoginContainer>
    </>
  )
}

Login.PageLayout = DefaultLayout;
