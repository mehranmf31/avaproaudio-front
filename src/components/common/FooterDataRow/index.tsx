import Link from 'next/link';
import React from 'react';

export interface FooterDataRowProps {
  title?: string;
  text: string;
  link?: string;
}

export const FooterDataRow = ({ title, text, link }: FooterDataRowProps): JSX.Element => {
  return link !== undefined ? (
    <Link href={link} className="block font-thin text-xl">
      {title !== undefined && <span className="font-light">{title}: </span>}
      {text.length > 31 ? <p>{text}</p> : text}
    </Link>
  ) : (
    <div className="block font-thin text-xl">
      {title !== undefined && <span className="font-light">{title}: </span>}
      {text.length > 31 ? <p className="mt-1">{text}</p> : text}
    </div>
  );
};
