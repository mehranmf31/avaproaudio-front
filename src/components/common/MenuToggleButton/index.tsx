import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

export interface MenuToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuToggleButton = ({
  isOpen,
  onClick,
}: MenuToggleButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      onClick={() => {
        onClick();
      }}
      className="inline-flex items-center p-0 text-white"
    >
      <Image
        src={isOpen ? '/icons/close_white_24dp.svg' : '/icons/menu_white_24dp.svg'}
        className={cx('duration-100', {
          'rotate-180': isOpen,
        })}
        width={32}
        height={32}
        alt="Menu"
      />
    </button>
  );
};
