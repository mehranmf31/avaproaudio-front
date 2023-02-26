import React from 'react';
import cx from 'classnames';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps): JSX.Element => {
  return <div className={cx(className, 'container mx-auto')}>{children}</div>;
};
