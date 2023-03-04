import Image from 'next/image';
import cx from 'classnames';
import s from './WhereToBuyBanner.module.css';
import Link from 'next/link';
import { Container } from '@/components/ui';

export interface WhereToBuyBannerProps {
  title: string;
  description: string;
  distributors: DistributorLinks[];
}

export interface DistributorLinks {
  label: string;
  link: string;
}

export const WhereToBuyBanner = ({
  title,
  description,
  distributors,
}: WhereToBuyBannerProps): JSX.Element => {
  return (
    <div className="relative">
      <Image
        className={cx(s.whereToBuyBanner__background)}
        src="/distributors_banner.png"
        alt={title}
        height={1080}
        width={1920}
        priority
      />
      <Container className="absolute top-0 bottom-0 left-0 right-0 z-1">
        <h3 className={cx(s.whereToBuyBanner__title)}>{title}</h3>
        <p className={cx(s.whereToBuyBanner__description)}>{description}</p>
        <div className="flex justify-center gap-6 mt-6 sm:mt-8 lg:mt-16">
          {distributors.map((d) => (
            <Link href={d.link} key={d.label}>
              <button className={cx(s.whereToBuyBanner__links)}>{d.label}</button>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
