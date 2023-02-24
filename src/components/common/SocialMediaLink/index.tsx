import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

export interface SocialMediaLinkProps {
  icon: string;
  name: string;
  className?: string;
  size?: number;
  link?: string;
}
export const SocialMediaLink = ({
  className,
  icon,
  name,
  link = '#',
  size = 32,
}: SocialMediaLinkProps): JSX.Element => {
  return (
    <a href={link} className={cx(className)}>
      <Image src={icon} width={size} height={size} alt={name} />
    </a>
  );
};
