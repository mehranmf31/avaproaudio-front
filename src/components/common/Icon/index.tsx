import Image from 'next/image';
import React from 'react';
import cx from 'classnames';

export interface IconProps {
  name: 'arrow';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  className?: string;
  /**
   * If rtlRotation was true, the icon will rotate in rtl pages
   */
  rtlRotation?: boolean;
}

const icons = { arrow: '/icons/arrow_right_circle_black.svg' };

export const Icon = ({
  name,
  size = 'md',
  className,
  rtlRotation = false,
}: IconProps): JSX.Element => {
  return (
    <Image
      src={icons[name]}
      width={255}
      height={255}
      alt={`${name} icon`}
      className={cx(className, rtlRotation, {
        'w-5 md:w-8 xl:w-10': size === 'sm',
        'w-6 md:w-9 xl:w-12': size === 'md',
        'w-7 md:w-10 xl:w-14': size === 'xl',
        'w-8 md:w-10 xl:w-16': size === 'xl',
        'w-9 md:w-12 xl:w-20': size === '2xl',
        'w-10 md:w-14 xl:w-24': size === '3xl',
        'w-12 md:w-16 xl:w-28': size === '4xl',
        'rtl-rotate': rtlRotation,
      })}
    />
  );
};
