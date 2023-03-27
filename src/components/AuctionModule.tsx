import React from 'react';

import ConnectButton from '@/components/ConnectButton';
import CurrentAuction from '@/components/CurrentAuction';
import TokenExplorer from '@/components/TokenExplorer';
import TokenRenderer from '@/components/TokenRenderer';

export default function AuctionModule({ address }: { address: `0x${string}` }) {
  return (
    <TokenExplorer
      tokenAddress={address}
      auctionRenderer={
        <CurrentAuction
          tokenAddress={address}
          connectButton={<ConnectButton />}
        />
      }
      tokenRenderer={(tokenId) => (
        <TokenRenderer tokenAddress={address} tokenId={tokenId.toString()} />
      )}
    />
  );
}
