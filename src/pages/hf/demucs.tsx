import * as React from 'react';

import Layout from '../../components/layout/Layout';
import Seo from '../../components/Seo';

export default function Demucs() {
  return (
    <Layout hideNav>
      <h1>Demucs: Stem Splitter</h1>
      <div className='mx-auto mt-8 w-[80%]'>
        <Seo templateTitle='Huggingface: Demucs' />
        <iframe
          src='https://akhaliq-demucs.hf.space'
          className='h-[80vh] w-full'
        ></iframe>
      </div>
    </Layout>
  );
}
