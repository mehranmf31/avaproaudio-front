import React from 'react';
import cx from 'classnames';

export interface OverlayProps {
  isOpen: boolean;
  className?: string;
  onClick: () => void;
}

export const Overlay = ({ isOpen, onClick, className }: OverlayProps): JSX.Element => {
  return (
    <div
      className={cx(
        className,
        'fixed top-0 bottom-0 left-0 right-0',
        'duration-200 border-0 bg-black',
        {
          'pointer-events-none opacity-0': !isOpen,
          'opacity-80': isOpen,
        },
      )}
      onClick={() => {
        onClick();
      }}
    ></div>
  );
};
