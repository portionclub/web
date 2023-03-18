import { TokenExplorer } from '@public-assembly/dao-utils';
import React from 'react';

export default function AuctionModule({ address }: { address: `0x${string}` }) {
  return <TokenExplorer tokenAddress={address} />;
}
