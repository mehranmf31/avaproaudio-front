import Image from 'next/image';
import cx from 'classnames';
import s from './WhereToBuyBanner.module.css';
import Link from 'next/link';
import { Button, Container, Heading, Text } from '@/components/ui';

export interface WhereToBuyBannerProps {
  title: string;
  description: string;
  distributors: DistributorLinks[];
  className?: string;
}

export interface DistributorLinks {
  label: string;
  link: string;
}

export const WhereToBuyBanner = ({
  title,
  description,
  distributors,
  className,
}: WhereToBuyBannerProps): JSX.Element => {
  return (
    <div className={cx(className, 'relative')}>
      <Image
        className={cx(s.whereToBuyBanner__background)}
        src="/distributors_banner.png"
        alt={title}
        height={1080}
        width={1920}
        priority
      />
      <Container className="absolute top-0 bottom-0 left-0 right-0 z-1">
        <Heading className={cx(s.whereToBuyBanner__title)} size="9xl">
          {title}
        </Heading>
        <Text size="xl" className={cx(s.whereToBuyBanner__description)}>
          {description}
        </Text>
        <div className="flex justify-center gap-6 mt-6 sm:mt-8 lg:mt-16">
          {distributors.map((d) => (
            <Link href={d.link} key={d.label}>
              <Button color={'outlined-white'}>{d.label}</Button>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
