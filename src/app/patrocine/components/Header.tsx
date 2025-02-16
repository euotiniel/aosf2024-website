'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import ScrollLink from './ScrollLink';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const buttonActiveOff = useRef<HTMLButtonElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const button = buttonActiveOff.current;
    if (button) {
      button.addEventListener('click', showOffCanvas);
      return () => {
        button.removeEventListener('click', showOffCanvas);
      };
    }
  }, []);

  const showOffCanvas = () => {
    const backgroundOffCanvas = document.querySelector(
      '.off_back'
    ) as HTMLElement;
    const offCanvas = document.querySelector('.off_nav') as HTMLElement;

    if (backgroundOffCanvas && offCanvas) {
      backgroundOffCanvas.classList.remove('hidden');
      offCanvas.classList.remove('hide');
      offCanvas.classList.add('visible');
    }
  };

  return (
    <header>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={navbarRef}
        className={classNames(
          'header z-20 bg-[#030B10] transition-all fixed top-0 left-0 right-0 py-4 m-auto items-center flex px-4 justify-between w-full border-b border-[#111D25]',
          {
            'max-w-7xl': !isScrolled,
            'max-w-full': isScrolled,
          }
        )}
      >
        <Link className="logo_container" href="/">
          <Image src="/logo.png" alt="Logo_Commmunity" width={30} height={30} />
        </Link>
        <div className="navbar_container paisagem-tablet:inline-flex hidden">
          <nav>
            <ul className="flex justify-center items-center gap-16">
              <li>
                <ScrollLink href="#inicio">Inicio</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#beneficios">Benefícios</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#guia">Guia</ScrollLink>
              </li>
              <li>
                <ScrollLink href="#contacto">Contacto</ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{duration: 0.6}}
          exit={{opacity: 0, scale: 0}}
          className="flex items-center gap-6"
        >
          <button className="hidden retrato-tablet:flex border-[#17222F] border rounded-full font-medium text-[14px] items-center px-4 py-1.5 bg-[#0C1318] transition-all hover:bg-[#10171d] text-white gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-globe size-4"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            PT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down size-5"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <button
            ref={buttonActiveOff}
            className="text-white paisagem-tablet:hidden inline-flex transition-all hover:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-ellipsis-vertical size-6"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </header>
  );
}
