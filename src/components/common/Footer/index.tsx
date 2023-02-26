import React from 'react';
import cx from 'classnames';
import { SocialMediaLink } from '../SocialMediaLink';
import { FooterDataRow } from '../FooterDataRow';
import { Container } from '@/components/ui/Container';

export interface FooterProps {
  className?: string;
  productLinks: FooterLinks;
  topLinks: FooterLinks;
  contactLinks: FooterLinks;
  socialLinks: SocialLinks[];
}

export interface FooterLinks {
  title: string;
  links: Link[];
}

export interface Link {
  title?: string;
  text: string;
  link: string;
}

export interface SocialLinks {
  icon: string;
  name: string;
  link: string;
}

export const Footer = ({
  className,
  productLinks,
  topLinks,
  contactLinks,
  socialLinks,
}: FooterProps): JSX.Element => {
  return (
    <Container className={cx(className, 'mt-12 rtl')}>
      <nav className="pt-8 pb-24 border-t border-gray-600 grid grid-cols-4 lg:grid-cols-9">
        <div className="col-span-2 my-8 flex flex-col gap-y-5">
          <p className="text-2xl font-light mb-3">{productLinks.title}</p>
          {productLinks.links.map((pl) => (
            <FooterDataRow key={pl.text} text={pl.text} link={pl.link} />
          ))}
        </div>

        <div className="col-span-2 my-8 flex flex-col gap-y-5">
          <p className="text-2xl font-light mb-3">{topLinks.title}</p>
          {topLinks.links.map((tl) => (
            <FooterDataRow key={tl.text} text={tl.text} link={tl.link} />
          ))}
        </div>

        <div className="col-span-3 my-8 flex flex-col gap-y-5">
          <p className="text-2xl font-light mb-3">{contactLinks.title}</p>
          {contactLinks.links.map((cl) => (
            <FooterDataRow key={cl.text} title={cl.title} text={cl.text} link={cl.link} />
          ))}
        </div>

        <div className="col-span-2 flex gap-x-6 lg:justify-end items-start my-8">
          {socialLinks.map((sl) => (
            <SocialMediaLink key={sl.name} icon={sl.icon} name={sl.name} link={sl.link} />
          ))}
        </div>
      </nav>
    </Container>
  );
};
