import React from 'react';
import cx from 'classnames';

export interface OverlayProps {
  isOpen: boolean;
  maxScreenSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  onClick: () => void;
}

export const Overlay = ({
  isOpen,
  onClick,
  maxScreenSize,
}: OverlayProps): JSX.Element => {
  return (
    <div
      className={cx(
        'fixed top-0 bottom-0 left-0 right-0',
        'duration-200 border-0 bg-black',
        maxScreenSize !== undefined ? `${maxScreenSize}:opacity-0` : '',
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
