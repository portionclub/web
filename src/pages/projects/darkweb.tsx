import React from 'react';

import Layout from '@/components/layout/Layout';

const VHSRedemptionPage: React.FC = () => {
  const data = {
    type: 'links',
    label: 'Links',
    title: 'Dark Web by Taifa',
    social: {},
    customLinks: [
      {
        url: 'https://www.irs.gov/',
        text: 'Questions & Concerns!',
        target: '_blank',
      },
      {
        url: 'https://nouns.build/dao/0x0c12aba58fc88f1267fa772012495b47aaf31cab',
        text: 'Portion Club Dao',
        target: '_blank',
      },
      {
        url: 'https://beta.catalog.works/tracks/e9684aad-729e-4280-bb43-6b3f52b28c5f',
        text: 'Dark Web on Catalog',
        target: '_blank',
      },
    ],
  };
  const player = React.useRef(null);

  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
        <div className='links'>
          {data.customLinks.map((link) => (
            <a
              href={link.url}
              target={link.target}
              rel='noopener noreferrer'
              key={link.url}
              className='block'
            >
              {link.text}
            </a>
          ))}
        </div>
        <audio
          ref={player}
          autoPlay
          src='/images/darkweb/tile-03-audio-audio0-dark_web_manifesto.mp3.mpga'
          className='w-1/2'
        ></audio>
        <div>
          <button
            className='mt-10 text-xl'
            onClick={() => {
              if (player.current) {
                (player.current as HTMLAudioElement).play();
              }
            }}
          >
            Play
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default VHSRedemptionPage;
