import React from 'react';
import type { JSXElementConstructor } from 'react';
import s from './Heading.module.css';
import cx from 'classnames';

interface HeadingProps {
  variant?: Variant;
  customSize?: Sizes;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

type Variant = 'heading' | 'pageHeading' | 'sectionHeading' | 'subHeading';
type Sizes =
  | 'none'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export const Heading = ({
  className = '',
  variant = 'subHeading',
  customSize = 'none',
  children,
  onClick,
}: HeadingProps): JSX.Element => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string;
  } = {
    heading: 'h1',
    pageHeading: 'h1',
    sectionHeading: 'h2',
    subHeading: 'h3',
  };

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap[variant];

  const HeadingClassName = cx(
    s.root,
    {
      [s.heading]: variant === 'heading',
      [s.pageHeading]: variant === 'pageHeading',
      [s.sectionHeading]: variant === 'sectionHeading',
      [s.subHeading]: variant === 'subHeading',
      [s.heading__md]: customSize === 'base',
      [s.heading__lg]: customSize === 'lg',
      [s.heading__xl]: customSize === 'xl',
      [s.heading__2x]: customSize === '2xl',
      [s.heading__3x]: customSize === '3xl',
      [s.heading__4x]: customSize === '4xl',
      [s.heading__5x]: customSize === '5xl',
      [s.heading__6x]: customSize === '6xl',
      [s.heading__7x]: customSize === '7xl',
      [s.heading__8x]: customSize === '8xl',
      [s.heading__9x]: customSize === '9xl',
    },
    className,
  );

  return (
    <Component className={HeadingClassName} onClick={onClick}>
      {children}
    </Component>
  );
};
