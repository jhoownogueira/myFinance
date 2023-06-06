import React, { useContext, useState } from "react";
import Image from "next/image";
import {
  DropDownMenuContent,
  DropDownMenuItem,
  MenuHeaderContainer,
} from "@/styles/menuHeader/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/authContext";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Bell, SignOut, Trash, User } from "@phosphor-icons/react";
import { Squash as Hamburger } from "hamburger-react";
import Cookies from "js-cookie";

export function MenuHeaderLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);

  function handleLogout() {
    Cookies.remove("token");
    Cookies.remove("refresh_token");
    router.push("/");
  }

  function toogleMenu() {
    setOpen(!isOpen);
  }

  if (loading) {
    return <>{children}</>;
  }

  return (
    <>
      <MenuHeaderContainer>
        <Image
          className="logo"
          src="/icons/logotype.svg"
          alt="logo myFinance"
          width={133.6}
          height={38}
        />
        <nav className="desktop">
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
                href="/control"
                className={router.pathname == "/control" ? "activeLink" : ""}
              >
                Controle
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
                className={router.pathname == "/categories" ? "activeLink" : ""}
              >
                Categorias
              </Link>
            </li>
            <li>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="DropDownMenuButton" asChild>
                  <button aria-label="Mais opções">
                    <div className="picture-content">
                      <Image
                        className="profile-picture"
                        src={user?.picture ? user.picture : "/images/logo.png"}
                        alt="logo myFinance"
                        width={42}
                        height={42}
                      />
                    </div>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropDownMenuContent>
                    <DropDownMenuItem asChild>
                      <button
                        className="dropDownMenu-pay-off"
                        aria-label="Quitar"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Notificações
                        <Bell size={18} weight="bold" />
                      </button>
                    </DropDownMenuItem>
                    <DropDownMenuItem asChild>
                      <button
                        className="dropDownMenu-edit"
                        aria-label="Editar"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Minha conta
                        <User size={18} weight="bold" />
                      </button>
                    </DropDownMenuItem>
                    <DropDownMenuItem asChild>
                      <button
                        className="dropDownMenu-erase"
                        aria-label="Apagar"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Lixeira
                        <Trash size={18} weight="bold" />
                      </button>
                    </DropDownMenuItem>
                    <DropDownMenuItem asChild>
                      <button
                        className="dropDownMenu-erase"
                        aria-label="Apagar"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLogout();
                        }}
                      >
                        Sair
                        <SignOut size={18} weight="bold" />
                      </button>
                    </DropDownMenuItem>
                  </DropDownMenuContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </li>
          </ul>
        </nav>
        <button className="hamburger" onClick={toogleMenu}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </button>
        <nav className={isOpen ? 'mobile open-menu' : 'mobile closed-menu'} onClick={(e) => {
          e.stopPropagation
           toogleMenu();
           }}>
          <ul>
            <li>
              <Link
                onClick={toogleMenu}
                href="/dashboard"
                className={router.pathname == "/dashboard" ? "activeLink" : ""}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
              onClick={toogleMenu}
                href="/control"
                className={router.pathname == "/control" ? "activeLink" : ""}
              >
                Controle
              </Link>
            </li>
            <li>
              <Link
              onClick={toogleMenu}
                href="/payments"
                className={router.pathname == "/payments" ? "activeLink" : ""}
              >
                Pagamentos
              </Link>
            </li>
            <li>
              <Link
              onClick={toogleMenu}
                href="/"
                className={router.pathname == "/receives" ? "activeLink" : ""}
              >
                Recebimentos
              </Link>
            </li>
            <li>
              <Link
              onClick={toogleMenu}
                href="/"
                className={router.pathname == "/wallets" ? "activeLink" : ""}
              >
                Carteiras
              </Link>
            </li>
            <li>
              <Link
              onClick={toogleMenu}
                href="/"
                className={router.pathname == "/categories" ? "activeLink" : ""}
              >
                Categorias
              </Link>
            </li>
            <li>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="DropDownMenuButton" asChild>
                  <button aria-label="Mais opções">
                    <div className="picture-content">
                      <Image
                        className="profile-picture"
                        src={user?.picture ? user.picture : "/images/logo.png"}
                        alt="logo myFinance"
                        width={42}
                        height={42}
                      />
                    </div>
                    <span>Perfil</span>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropDownMenuContent>
                    <DropDownMenuItem asChild>
                      <button
                        className="dropDownMenu-pay-off"
                        aria-label="Quitar"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Notificações
                        <Bell size={18} weight="bold" />
                      </button>
                    </DropDownMenuItem>
                    <DropDownMenuItem asChild>
                      <button
                        className="dropDownMenu-edit"
                        aria-label="Editar"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Minha conta
                        <User size={18} weight="bold" />
                      </button>
                    </DropDownMenuItem>
                    <DropDownMenuItem asChild>
                      <button
                        className="dropDownMenu-erase"
                        aria-label="Apagar"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Lixeira
                        <Trash size={18} weight="bold" />
                      </button>
                    </DropDownMenuItem>
                    <DropDownMenuItem asChild>
                      <button
                        className="dropDownMenu-erase"
                        aria-label="Apagar"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLogout();
                        }}
                      >
                        Sair
                        <SignOut size={18} weight="bold" />
                      </button>
                    </DropDownMenuItem>
                  </DropDownMenuContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </li>
          </ul>
        </nav>
      </MenuHeaderContainer>
      {children}
    </>
  );
}
