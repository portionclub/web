import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='flex min-h-screen flex-col'>
        <section className='mx-auto flex max-w-[910px] flex-1 flex-col items-center justify-center text-center text-white'>
          <p className='text-9xl'>Welcome to Portion Club 69</p>
          <p className='mt-16 text-4xl'>
            A creative community that actively rewards participation in its own
            evolution. Artists with the goal of bringing ideas to reality.
            Building through partnership, and collaboration IRL & Web3.
          </p>
        </section>
        <footer className='flex items-center border-t'>
          <div className='w-4/12 p-6 text-white'>
            <div className='text-md text-4xl'>Projects</div>
            <div className='text-lg'>4 projects currently in progress</div>
          </div>
          <div className='w-4/12 border-x p-6 text-white'>
            <div className='text-md text-4xl'>Discord</div>
            <div className='text-lg'>
              Nonmembers can chat in public channels
            </div>
          </div>
          <div className='w-4/12 bg-highlight p-6'>
            <div className='text-md text-4xl'>Join</div>
            <div className='text-lg'>
              Buy an NFT on Nouns Builder for access
            </div>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
