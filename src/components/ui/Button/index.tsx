import React from 'react';
import cx from 'classnames';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  color?: 'light-red' | 'white' | 'red' | 'outlined-white' | 'none';
  type?: 'submit' | 'button' | 'reset';
  hasPadding?: boolean;
}

export const Button = ({
  type = 'button',
  hasPadding = true,
  children,
  color = 'none',
  disabled = false,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const buttonStyle: string = cx(
    'font-sans font-semibold rounded-full cursor-pointer text-md md:text-xl duration-200',
    {
      'p-3 px-5 md:p-4 md:px-9': !!hasPadding,
      'bg-red-400 text-white': color === 'light-red',
      'bg-red-600 text-white': color === 'red',
      'bg-white text-black': color === 'white',
      'bg-transparent border-2 border-white text-white hover:text-black hover:bg-white':
        color === 'outlined-white',
      'text-gray-800': color === 'none',
      'pointer-events-none': disabled,
    },
    className,
  );

  return (
    <button type={type} disabled={disabled} className={buttonStyle} {...props}>
      {children}
    </button>
  );
};
