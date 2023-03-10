import React from 'react';
import type { JSXElementConstructor } from 'react';
import s from './Text.module.css';
import cx from 'classnames';

interface TextProps {
  variant?: Variant;
  size?: Sizes;
  className?: string;
  children?: React.ReactNode;
  html?: string;
}

type Variant = 'paragraph' | 'inlineText' | 'div';
type Sizes = 'none' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

export const Text = ({
  className = '',
  variant = 'paragraph',
  size = 'base',
  children,
  html,
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
    {
      [s.text__base]: size === 'base',
      [s.text__lg]: size === 'lg',
      [s.text__xl]: size === 'xl',
    },
    className,
  );

  return html !== undefined && children === undefined ? (
    <Component className={TextClassName} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <Component className={TextClassName}>{children}</Component>
  );
};
