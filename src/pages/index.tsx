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

      <section>
        <p className='text-9xl'>Welcome to Portion Club 69</p>
        <p className='mt-16 text-4xl'>
          A creative community that actively rewards participation in its own
          evolution. Artists with the goal of bringing ideas to reality.
          Building through partnership, and collaboration IRL & Web3.
        </p>
      </section>
    </Layout>
  );
}
