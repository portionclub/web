import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as React from 'react';

import Modal from '@/components/Modal';

const AuctionModule = dynamic(() => import('../AuctionModule'), {
  ssr: false,
});

const NavItem = ({
  link,
  title,
  ...props
}: {
  link?: string;
  title: string;
}) => (
  <a
    {...props}
    className='block h-16 max-w-max cursor-pointer py-1 text-3xl transition-all hover:text-4xl'
    href={link}
  >
    {title}
  </a>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showAuction, _] = React.useState(false);
  // const toggleAuction = React.useCallback(
  //   (e: React.MouseEvent) => {
  //     e.preventDefault();
  //     setShowAuction(!showAuction);
  //   },
  //   [showAuction]
  // );

  return (
    <>
      <Modal isOpen={showAuction}>
        <AuctionModule address='0x0c12aba58fc88f1267fa772012495b47aaf31cab' />
      </Modal>
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
        <div className='flex h-[80vh] w-full flex-col p-4'>
          <div className='flex w-full items-center justify-between'>
            <Link href='/' className='block py-2'>
              Portionclub69
            </Link>
            {/* <button
              className='m-3 block bg-highlight py-2 px-4 text-dark'
              onClick={toggleAuction}
            >
              Join
            </button> */}
            <Link
              className='m-3 block bg-highlight py-2 px-4 text-dark'
              href='https://nouns.build/dao/0x0c12aba58fc88f1267fa772012495b47aaf31cab'
            >
              Join
            </Link>
          </div>
          <main>{children}</main>
          <nav className='mt-10'>
            <NavItem
              link='https://pc69.xyz/u/portionclub69/pages'
              title='Projects'
            />
            {/* <NavItem link='/proposals' title='Proposals' /> */}
            <NavItem
              link='https://pc69.xyz/u/portionclub69/events'
              title='Events'
            />
            {/* <NavItem link='/members' title='Members' /> */}
          </nav>
        </div>
      </div>
    </>
  );
}
