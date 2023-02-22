import React from 'react';
import cx from 'classnames';

export interface LocaleButtonProps {
  language: string;
  label: string;
  isActive: boolean;
}

export const LocaleButton = ({
  language,
  label,
  isActive,
}: LocaleButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={cx('inline-flex items-center justify-center w-8 h-8 rounded-lg', {
        'bg-white text-gray-900': isActive,
        'bg-black border-2 border-gray-400': !isActive,
      })}
      aria-label={`Switch to language ${language}`}
    >
      {label}
    </button>
  );
};
