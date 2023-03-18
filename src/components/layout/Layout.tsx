import classnames from 'classnames';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as React from 'react';

const AuctionModule = dynamic(() => import('../AuctionModule'), {
  ssr: false,
});

const NavItem = ({
  link,
  title,
  description,
  className,
  ...props
}: {
  link?: string;
  title: string;
  description: string;
  className: string;
  onClick?: (e: React.MouseEvent) => void;
}) => (
  <a
    {...props}
    className={`${className} block w-4/12 cursor-pointer border-t p-6`}
    href={link}
  >
    <div className='xm:text-3xl text-2xl sm:text-4xl'>{title}</div>
    <div className='hidden h-[30px] text-lg leading-5 md:block'>
      {description}
    </div>
  </a>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showAuction, setShowAuction] = React.useState(false);
  const toggleAuction = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setShowAuction(!showAuction);
    },
    [showAuction]
  );

  return (
    <div className='h-full w-full text-white'>
      <video
        preload='auto'
        playsInline
        autoPlay
        muted
        loop
        className='fixed top-0 left-0 -z-[1] h-full w-full bg-dark object-contain object-top sm:object-center'
      >
        <source src='/video/inkblot1080.webm' type='video/webm' />
        <source src='/video/inkblot1080.mp4' type='video/mp4; codecs=hvc1' />
      </video>
      <div className='flex h-[80vh] w-full flex-col'>
        <div
          className={classnames(
            'fixed top-4 m-auto flex max-w-[300px] flex-col gap-8 rounded-l-xl bg-highlight p-4 text-dark transition-all',
            {
              'right-0': showAuction,
              '-right-full': !showAuction,
            }
          )}
        >
          <AuctionModule address='0x0c12aba58fc88f1267fa772012495b47aaf31cab' />
        </div>
        <Link href='/' className='block py-2 px-4'>
          Portionclub69
        </Link>
        <main className='mx-auto mt-16 flex w-full max-w-[910px] flex-1 flex-col items-center justify-center text-center sm:mt-0'>
          {children}
        </main>
        <nav className='fixed bottom-0 flex w-full items-center'>
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
            onClick={toggleAuction}
            title='Join'
            description='Buy an NFT for access'
            className='border-highlight bg-highlight text-dark'
          />
        </nav>
      </div>
    </div>
  );
}
