/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  '@public-assembly/dao-utils',
]);

const nextConfig = {
  reactStrictMode: true,
  env: {
    LIVEPEER_KEY: process.env.LIVEPEER_KEY,
    LIVEPEER_PLAYBACK_ID: process.env.LIVEPEER_PLAYBACK_ID,
  },
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(md|mdx)?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {},
        },
      ],
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });
    return config;
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    esmExternals: 'loose',
  },
};

module.exports = withTM(nextConfig);
