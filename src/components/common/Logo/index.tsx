import Image from 'next/image';

export interface LogoProps {
  width?: number;
  height?: number;
}

export const Logo = ({ width = 48, height = 48 }: LogoProps): JSX.Element => {
  return (
    <Image src="/logo192.png" width={width} height={height} alt="AVA Pro Audio logo" />
  );
};
