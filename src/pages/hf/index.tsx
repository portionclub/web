import * as React from 'react';

import Layout from '@/components/layout/Layout';
import { PreviewCardLink } from '@/components/PreviewCardLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

const SPACES = [
  {
    title: 'Demucs: Stem Splitter',
    href: '/hf/demucs',
    image: '/images/hf/demucs.png',
    description:
      'Gradio demo for Demucs: Music Source Separation in the Waveform Domain. To use it, simply upload your audio, or click one of the examples to load them. Read more at the links below.',
  },
];

export default function Index() {
  return (
    <Layout hideNav>
      <h1>Huggingface Embeds</h1>
      <div className='mx-20 mb-20 flex w-full flex-wrap space-x-8'>
        <Seo templateTitle='Huggingface Embeds' />
        {SPACES.map((project) => (
          <PreviewCardLink key={project.href} {...project} />
        ))}
      </div>
    </Layout>
  );
}
