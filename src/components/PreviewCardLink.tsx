import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import Tilt from 'react-parallax-tilt';

export const PreviewCardLink = ({ href, image, title, description }) => {
  return (
    <Link
      href={href}
      className='hover:active mt-4 block origin-top-right text-2xl transition-all duration-500 hover:scale-125 hover:brightness-100 sm:text-4xl sm:brightness-[.9]'
    >
      <Tilt
        className='relative mb-40 aspect-[2/3] max-w-[314px]'
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)',
        }}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        trackOnWindow={false}
        tiltReverse={true}
        perspective={1000}
        transitionSpeed={1500}
        scale={1.04}
      >
        <Image
          src={image}
          alt='inkblot'
          width='3133'
          height='1304'
          className='mb-6 w-full object-contain object-top'
        />
        <div className='glitch'>
          <div className='text-xl'>{title}</div>
          <div className='text-xs'>{description}</div>
        </div>
      </Tilt>
    </Link>
  );
};
