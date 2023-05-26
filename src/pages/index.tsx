import { IndexContainer } from '@/styles';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const delay = 2000;

    const timeout = setTimeout(() => {
      router.push('/login');
    }, delay);

    return () => clearTimeout(timeout);

  });

  return (
    <>
      <Head>
        <title>myFinance</title>
        <meta name="author" content="Jhonata Nogueira" />
        <meta name="creator" content="Jhonata Nogueira" />
        <meta name="title" content="myFinance" />
      </Head>
      <IndexContainer>
        <Image
          className='logo'
          src='/images/logo_big.svg'
          alt='logo myFinance'
          width={500}
          height={300}
        />
      </IndexContainer>
    </>
  )
}
