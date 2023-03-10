import React from 'react';
import type { JSXElementConstructor } from 'react';
import s from './Text.module.css';
import cx from 'classnames';

interface TextProps {
  variant?: Variant;
  customSize?: Sizes;
  className?: string;
  children?: React.ReactNode;
}

type Variant = 'paragraph' | 'inlineText' | 'div';
type Sizes = 'none' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

export const Text = ({
  className = '',
  variant = 'paragraph',
  customSize = 'base',
  children,
}: TextProps): JSX.Element => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string;
  } = {
    paragraph: 'p',
    inlineText: 'span',
    div: 'div',
  };

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap[variant];

  const TextClassName = cx(
    s.root,
    {
      [s.text__base]: customSize === 'base',
      [s.text__lg]: customSize === 'lg',
      [s.text__xl]: customSize === 'xl',
    },
    className,
  );

  return <Component className={TextClassName}>{children}</Component>;
};
