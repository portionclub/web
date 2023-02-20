import Link from 'next/link';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-primary min-h-screen w-full'>
      <video
        preload='auto'
        playsInline
        autoPlay
        muted
        loop
        className='absolute h-screen w-full'
      >
        <source src='/video/inkblot1080.webm' type='video/webm' />
      </video>
      <div className='absolute z-10 flex h-screen min-h-screen w-full flex-col'>
        <Link href='/' className='block py-2 px-4'>
          Portionclub69
        </Link>
        <main className='mx-auto flex max-w-[910px] flex-1 flex-col items-center justify-center text-center'>
          {children}
        </main>
        <nav className='flex items-center border-t'>
          <a
            className='w-4/12 p-6 text-white'
            href='https://pc69.xyz/u/portionclub69/pages'
          >
            <div className='text-md text-4xl'>Projects</div>
            <div className='text-lg'>4 projects currently in progress</div>
          </a>
          <a
            className='w-4/12 border-x p-6 text-white'
            href='https://discord.gg/RDtPAqm62z'
          >
            <div className='text-md text-4xl'>Discord</div>
            <div className='text-lg'>
              Nonmembers can chat in public channels
            </div>
          </a>
          <a
            href='https://nouns.build/dao/0x0c12aba58fc88f1267fa772012495b47aaf31cab'
            className='block w-4/12 bg-highlight p-6'
          >
            <div className='text-md text-4xl'>Join</div>
            <div className='text-lg'>
              Buy an NFT on Nouns Builder for access
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
}
