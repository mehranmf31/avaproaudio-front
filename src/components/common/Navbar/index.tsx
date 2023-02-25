import React, { useState } from 'react';
import { Logo } from '../Logo';
import Link from 'next/link';
import cx from 'classnames';
import s from './Navbar.module.css';
import useHideBodyOverflow from '@/hooks/useHideBodyOverflow';
import useDirection from '@/hooks/useDirection';
import { LocaleButton } from '../LocaleButton';
import { MenuToggleButton } from '../MenuToggleButton';
import { Overlay } from '../Overlay';

export interface NavbarProps {
  navLinks: NavLinks[];
  locales: Locales[];
  locale: string;
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

export const Navbar = ({ navLinks, locales, locale }: NavbarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { isRtl } = useDirection();
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
          <Link href="/" className="order-1">
            <Logo />
          </Link>
          <div className="flex md:hidden items-center justify-end md:order-2 w-20 order-2">
            <MenuToggleButton
              isOpen={isOpen}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
          <div className="hidden md:flex items-center justify-end md:order-2 w-20 gap-x-2 order-2">
            {locales.map((l) => (
              <Link href={''} locale={l.language} key={l.language}>
                <LocaleButton
                  language={l.language}
                  label={l.label}
                  isActive={l.language === locale}
                />
              </Link>
            ))}
          </div>
          <nav
            className={cx(s.navbar__nav, 'order-2', {
              'scale-100': isOpen,
              'max-md:scale-0 max-md:invisible': !isOpen,
            })}
          >
            <div className={cx(s.navbar__nav__inner)} dir={isRtl ? 'rtl' : 'ltr'}>
              {navLinks.map((l) => (
                <Link className="d-block max-md:mb-8" href={l.url} key={l.url}>
                  {l.name}
                </Link>
              ))}
              <div className="flex md:hidden justify-end md:order-2 w-20 gap-x-2">
                {locales.map((l) => (
                  <Link href={''} locale={l.language} key={l.language}>
                    <LocaleButton
                      language={l.language}
                      label={l.label}
                      isActive={l.language === locale}
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
