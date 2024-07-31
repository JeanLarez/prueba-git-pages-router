/* eslint-disable react/no-unknown-property */
/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import Subitems from "./Subitems";

const NavBar = () => {
  const [hidden, setHidden] = useState(true);
  const [visibleSubmenu, setVisibleSubmenu] = useState(null); // Estado unificado para los submenús
  const [hoveringSubmenu, setHoveringSubmenu] = useState(null); // Estado para saber si el mouse está sobre el submenú

  let nav1 = ["NUESTRA HISTORIA", "EL EQUIPO"];
  let nav2 = [
    "HAMBURGUESAS",
    "MEXICANO",
    "NOVEDADES",
    "AREPAS",
    "BROCHETAS",
    "ARABE",
    "ESPECIALES",
    "BEBIDAS",
  ];

  const handleClickButtonHamburger = () => {
    setHidden(!hidden);
  };

  const handleMouseEnterSubitems = () => {
    setVisibleSubmenu("nosotros");
    setHoveringSubmenu("nosotros");
  };

  const handleMouseLeaveSubitems = () => {
    setHoveringSubmenu(null);
  };

  const handleMouseEnterSubitems2 = () => {
    setVisibleSubmenu("menus");
    setHoveringSubmenu("menus");
  };

  const handleMouseLeaveSubitems2 = () => {
    setHoveringSubmenu(null);
  };

  const handleMouseLeaveNav = () => {
    if (hoveringSubmenu !== "nosotros" && hoveringSubmenu !== "menus") {
      setVisibleSubmenu(null);
    }
  };

  const handleClickSubitems = () => {
    setVisibleSubmenu(visibleSubmenu === "nosotros" ? null : "nosotros");
  };

  const handleClickSubitems2 = () => {
    setVisibleSubmenu(visibleSubmenu === "menus" ? null : "menus");
  };

  return (
    <header className="sticky top-0 z-10 flex items-center font-mont font-bold md:flex md:items-center">
      <a
        href="https://"
        className="relative left-1/2  top-0 z-50 block h-20 w-36 -translate-x-2/4 overflow-hidden whitespace-nowrap bg-[url('./src/assets/icon/latinoswhite.svg')] bg-center bg-no-repeat indent-[101%]"
      >
        Home
      </a>
      <input type="checkbox" className="hidden"></input>

      <button
        onClick={handleClickButtonHamburger}
        id="hamburger-button"
        className={
          hidden
            ? "absolute right-5 size-8 cursor-pointer text-3xl md:hidden"
            : "toggle-btn absolute right-5 size-8 cursor-pointer text-3xl md:hidden"
        }
      >
        <div className="h-1 w-8 rounded bg-yellow-500 text-xs transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-amber-500 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-yellow-700 after:transition-all after:duration-500 after:content-['']"></div>
      </button>

      <nav
        className="fixed inset-x-0 top-0 z-10 hidden bg-white/85 text-sm backdrop-blur-sm md:block"
        onMouseLeave={handleMouseLeaveNav}
      >
        <ul className="mx-auto flex h-20 items-center justify-around text-center ">
          <li
            onMouseEnter={handleMouseEnterSubitems}
            onMouseLeave={handleMouseLeaveSubitems}
            className="flex w-40 justify-center border-b-4 border-transparent py-7 hover:border-yellow-600 hover:text-yellow-600"
          >
            NOSOTROS
            {visibleSubmenu === "nosotros" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 15l6 -6l6 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            )}
          </li>

          <li
            onMouseEnter={handleMouseEnterSubitems2}
            onMouseLeave={handleMouseLeaveSubitems2}
            className="flex w-40 justify-center border-b-4 border-transparent py-7 hover:border-yellow-600 hover:text-yellow-600"
          >
            MENUS
            {visibleSubmenu === "menus" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 15l6 -6l6 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            )}
          </li>
          <li className="ml-32 w-40 hover:text-yellow-600">
            <a href="http://" className="hover:opacity-90">
              RESERVACIONES
            </a>
          </li>
          <li className="w-40 hover:text-yellow-600">
            <a href="http://" className="hover:opacity-90">
              CONTACTO
            </a>
          </li>
        </ul>
        {visibleSubmenu === "nosotros" && (
          <Subitems
            title={nav1}
            onMouseEnter={handleMouseEnterSubitems}
            onMouseLeave={handleMouseLeaveSubitems}
          />
        )}
        {visibleSubmenu === "menus" && (
          <Subitems
            title={nav2}
            onMouseEnter={handleMouseEnterSubitems2}
            onMouseLeave={handleMouseLeaveSubitems2}
          />
        )}
      </nav>

      <section
        id="mobile-menu"
        className={
          hidden
            ? "absolute top-24 hidden w-full bg-white text-black"
            : "absolute top-24 w-full origin-top animate-open-menu bg-white text-sm text-black"
        }
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8 text-center md:hidden"
          aria-label="mobile"
        >
          <ul className="w-full">
            <li
              onClick={handleClickSubitems}
              className="flex w-full justify-center py-8 text-center hover:text-yellow-600 hover:opacity-90"
            >
              NOSOTROS
              {visibleSubmenu === "nosotros" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 15l6 -6l6 6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              )}
            </li>
            {visibleSubmenu === "nosotros" && <Subitems title={nav1} />}
            <li
              className="flex w-full justify-center py-8 text-center hover:text-yellow-600 hover:opacity-90"
              onClick={handleClickSubitems2}
            >
              MENUS
              {visibleSubmenu === "menus" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 15l6 -6l6 6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              )}
            </li>
            {visibleSubmenu === "menus" && <Subitems title={nav2} />}
            <li className="py-8 hover:text-yellow-600">
              <a
                href="#reservaciones"
                className="w-full text-center hover:opacity-90"
              >
                RESERVACIONES
              </a>
            </li>
            <li className="py-8 hover:text-yellow-600">
              <a
                href="#contacto"
                className="w-full text-center hover:opacity-90"
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
