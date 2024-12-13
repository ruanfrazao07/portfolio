"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
      <header>
        <nav className="navbackground flex p- justify-between">
            <Link href="/">
                  <Image src="assets/logo.svg" width={50} height={50} alt="Logo Frazão"/>
            </Link>

            <ul className="">
                <li className="">
                  <Link href="/" className="">
                    Home
                  </Link>
                </li>

                <li className="">
                  <Link href="/sobre" className="">
                    Sobre
                  </Link>
                </li>

                <li className="">
                  <Link href="/projetos" className="">
                    Projetos
                  </Link>
                </li>

            </ul>
            <button className="">
              Contatar
            </button>
        </nav>
      </header>
    );
  }
  export default Navbar;
