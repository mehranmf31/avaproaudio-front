import Image from 'next/image';
import React from 'react';
import cx from 'classnames';
import { Icon } from '@/components/common';
import { Button, Heading, Text } from '@/components/ui';
import Link from 'next/link';

export interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  isActive?: boolean;
  className?: string;
  comingSoonLabel?: string;
}

export const CategoryCard = ({
  title,
  description,
  image,
  link,
  isActive = true,
  className,
  comingSoonLabel = 'Coming Soon!',
}: CategoryCardProps): JSX.Element => {
  const cardClasses = cx(
    'bg-white text-gray-800',
    'flex max-lg:flex-wrap gap-12',
    'p-9 py-10 md:p-14 lg:p-20',
    'rounded-5xl lg:rounded-6xl',
    className,
  );

  return (
    <div className={cardClasses}>
      <div className="max-lg:basis-full basis-1/2 relative">
        <div className="flex justify-between items-center">
          <Heading className="font-extrabold">{title}</Heading>
          {isActive && link !== undefined && (
            <Link href={link} className="inline-block">
              <Icon size="xl" name="arrow" rtlRotation={true} className="lg:hidden" />
            </Link>
          )}
        </div>

        <Text className="mt-5 lg:mt-9 lg:mb-24">{description}</Text>

        {isActive && link !== undefined && (
          <Link href={link}>
            <Icon
              size="xl"
              name="arrow"
              rtlRotation={true}
              className="absolute bottom-0 max-lg:hidden"
            />
          </Link>
        )}

        {!isActive && (
          <Button className="lg:absolute lg:bottom-0 mt-9" color="light-red" disabled>
            {comingSoonLabel}
          </Button>
        )}
      </div>
      <div className="max-lg:basis-full basis-1/2">
        <div className="flex justify-end max-lg:justify-center">
          <Image
            className="w-full sm:w-10/12"
            src={image}
            width={500}
            height={500}
            alt={title}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
