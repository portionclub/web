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
      <div className='mt-16 flex w-full max-w-[530px]'>
        <Seo templateTitle='Home' />

        <section>
          {/* <p className='mb-14 inline-block bg-highlight p-2 font-["Comic_Sans_MS"] text-dark'>
          At ETH Denver? Us too! Link with us in person{' '}
          <Link href='https://twitter.com/portionclub69'>@portionclub69</Link>
        </p> */}
          <p className='mt-4 text-2xl sm:text-4xl'>
            A creative community that actively rewards participation in its own
            evolution. Artists with the goal of bringing ideas to reality.
            Building through partnership, and collaboration IRL & Web3.
          </p>
        </section>
      </div>
    </Layout>
  );
}
