import React, { useState } from 'react';
import { Logo } from '../Logo';
import Link from 'next/link';
import cx from 'classnames';
import s from './Navbar.module.css';
import useHideBodyOverflow from '../../../hooks/useHideBodyOverflow';
import { LocaleButton } from '../LocaleButton';
import { MenuToggleButton } from '../MenuToggleButton';
import { Overlay } from '../Overlay';

export interface NavbarProps {
  navLinks: NavLinks[];
  locales: Locales[];
}

export interface NavLinks {
  name: string;
  url: string;
}

export interface Locales {
  language: string;
  label: string;
  isActive: boolean;
}

export const Navbar = ({ navLinks, locales }: NavbarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  useHideBodyOverflow(isOpen);

  return (
    <>
      <Overlay
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="lg:opacity-0"
      />
      <header className={cx(s.navbar)} dir="ltr">
        <div className="container flex flex-wrap items-center justify-between mx-auto h-24">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex md:hidden items-center justify-end md:order-2 w-20">
            <MenuToggleButton
              isOpen={isOpen}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
          <div className="hidden md:flex items-center justify-end md:order-2 w-20 gap-x-2">
            {locales.map((l) => (
              <Link href={''} locale={l.language} key={l.language}>
                <LocaleButton
                  language={l.language}
                  label={l.label}
                  isActive={l.isActive}
                />
              </Link>
            ))}
          </div>
          <nav
            className={cx(s.navbar__nav, {
              'scale-100': isOpen,
              'max-md:scale-0 max-md:invisible': !isOpen,
            })}
          >
            <div className={cx(s.navbar__nav__inner)}>
              {navLinks.map((l) => (
                <Link className="d-block max-md:mb-8" href={l.url} key={l.url}>
                  {l.name}
                </Link>
              ))}
              <div className="flex md:hidden justify-start md:order-2 w-20 gap-x-2">
                {locales.map((l) => (
                  <Link href={''} locale={l.language} key={l.language}>
                    <LocaleButton
                      language={l.language}
                      label={l.label}
                      isActive={l.isActive}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="h-24"></div>
    </>
  );
};
