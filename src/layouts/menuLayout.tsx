import React from "react";
import Image from "next/image"
import { MenuHeaderContainer } from "@/styles/menuHeader/styles";
import Link from "next/link";
import { useRouter } from "next/router";

export function MenuHeaderLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
    <MenuHeaderContainer>
      <Image
        className='logo'
        src='/icons/logotype.svg'
        alt='logo myFinance'
        width={133.6}
        height={38}
      />
      <nav>
        <ul>
          <li>
            <Link
              href="/dashboard"
              className={router.pathname == "/dashboard" ? "activeLink" : ""}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/payments"
              className={router.pathname == "/payments" ? "activeLink" : ""}
            >
              Pagamentos
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={router.pathname == "/receives" ? "activeLink" : ""}
            >
              Recebimentos
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={router.pathname == "/wallets" ? "activeLink" : ""}
            >
              Carteiras
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={router.pathname == "/my-account" ? "activeLink" : ""}
            >
              Minha conta
            </Link>
          </li>
        </ul>
      </nav>
    </MenuHeaderContainer>
    {children}
    </>

  )
}