import { Player } from '@livepeer/react';
import * as React from 'react';

import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';

export default function PettyFestLive() {
  return (
    <Layout hideNav>
      <h1>Petty Fest 2: Too Live</h1>
      <div className='mx-auto mt-8 w-[80%]'>
        <Seo templateTitle='Petty Fest 2 Live' />
        <Player
          title='Petty Fest 2: Too Live'
          playbackId={process.env.LIVEPEER_PLAYBACK_ID}
          autoPlay
          lowLatency
        />
      </div>
    </Layout>
  );
}
