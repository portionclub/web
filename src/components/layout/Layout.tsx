import Link from 'next/link';
import * as React from 'react';

const NavItem = ({
  link,
  title,
  description,
  className,
}: {
  link: string;
  title: string;
  description: string;
  className: string;
}) => (
  <a className={`${className} block w-4/12 border-t p-6`} href={link}>
    <div className='xm:text-3xl text-2xl sm:text-4xl'>{title}</div>
    <div className='hidden text-lg md:block'>{description}</div>
  </a>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen w-full text-white'>
      <video
        preload='auto'
        playsInline
        autoPlay
        muted
        loop
        className='fixed top-0 left-0 -z-[1] h-full w-full bg-dark object-contain object-top sm:object-center'
      >
        <source src='/video/inkblot1080.webm' type='video/webm' />
      </video>
      <div className='flex h-full w-full flex-col'>
        <Link href='/' className='block py-2 px-4'>
          Portionclub69
        </Link>
        <main className='mx-auto mt-16 flex w-full max-w-[910px] flex-1 flex-col items-center justify-center text-center sm:mt-0'>
          {children}
        </main>
        <nav className='flex w-full items-center'>
          <NavItem
            link='https://pc69.xyz/u/portionclub69/pages'
            title='Projects'
            description='4 projects currently in progress'
            className='text-white'
          />
          <NavItem
            link='https://discord.gg/RDtPAqm62z'
            title='Discord'
            description='Nonmembers can chat in public channels'
            className='border-l text-white'
          />
          <NavItem
            link='https://discord.gg/RDtPAqm62z'
            title='Join'
            description='Buy an NFT on Nouns Builder for access'
            className='border-highlight bg-highlight text-dark'
          />
        </nav>
      </div>
    </div>
  );
}
