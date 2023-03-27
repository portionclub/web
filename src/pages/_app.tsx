import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { NFTFetchConfiguration } from '@zoralabs/nft-hooks/dist/context/NFTFetchContext';
import { ZDKFetchStrategy } from '@zoralabs/nft-hooks/dist/strategies';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import React from 'react';
import { SWRConfig } from 'swr';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import '@/styles/globals.css';
import '@/styles/colors.css';
import '@rainbow-me/rainbowkit/styles.css';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID || '' }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'portionclub69',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const strategy = new ZDKFetchStrategy(
  '1',
  'https://api.zora.co/graphql'
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='text-white'>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          coolMode
          theme={lightTheme({
            accentColor: 'black',
            borderRadius: 'large',
          })}
        >
          <NFTFetchConfiguration networkId='1' strategy={strategy}>
            <SWRConfig
              value={{
                fetcher: (resource, init) =>
                  fetch(resource, init).then((res) => res.json()),
              }}
            >
              <NextNProgress
                color='#ff89de'
                startPosition={0.125}
                stopDelayMs={200}
                height={2}
                showOnShallow={true}
                options={{ showSpinner: false }}
              />
              <Component {...pageProps} />
            </SWRConfig>
          </NFTFetchConfiguration>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default MyApp;
