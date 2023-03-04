import Image from 'next/image';

export interface LogoProps {
  width?: number;
  height?: number;
  alt?: string;
}

export const Logo = ({
  width = 48,
  height = 48,
  alt = 'AVA Pro Audio logo',
}: LogoProps): JSX.Element => {
  return <Image src="/logo192.png" width={width} height={height} alt={alt} />;
};
