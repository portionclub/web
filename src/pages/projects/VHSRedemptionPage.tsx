import React from 'react';

import Layout from '@/components/layout/Layout';

const VHSRedemptionPage: React.FC = () => {
  const data = {
    title: 'AIGHT SKATE TAPE 📼 VHS REDEMPTION PAGE',
    description: null,
    backgroundColor: '1f1f1f',
    backgroundOpacity: 0,
    backgroundGradient: null,
    slug: 'VHS',
    publishedAt: '2022-07-27T00:01:16.164Z',
    type: 'embed',
    label: 'CLICK HERE TO REDEEM PHYSICAL AIGHT VHS TAPE',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSei16zhZUMsXXpB1nDIKfNulqgeB7ozvvRSk4WIMwS2vdWROQ/viewform?usp=sf_link',
    options: {
      _height: {
        label: 'Adjust height',
        value: 1940,
        placeholder: 'ex.: 600, in px',
      },
    },
    iframeConfiguration: '{"rel":"app","height":1940}',
  };

  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
        <a href={data.url}>{data.label}</a>
        <div className='iframely-docs-google iframely-app iframely-embed'>
          <div className='iframely-responsive'>
            <iframe
              src='//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSei16zhZUMsXXpB1nDIKfNulqgeB7ozvvRSk4WIMwS2vdWROQ%2Fviewform%3Fusp%3Dsf_link&key=ec1133e249fbfff764ead184bb038761'
              allowFullScreen
              height='1940'
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VHSRedemptionPage;
