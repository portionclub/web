import {
  CurrentAuction,
  TokenRenderer,
  useDaoCollectionQuery,
} from '@public-assembly/dao-utils';
import Image from 'next/image';
import React from 'react';

export interface TokenExplorerProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Nounish NFT Contract address
   */
  tokenAddress: `0x${string}`;
  /**
   * Renderer Component for current auction
   */
  auctionRenderer?: React.ReactNode;
  /**
   * Renderer Component for dao tokens
   */
  tokenRenderer?: (tokenId: string) => React.ReactNode;
  /**
   * Button to handle wallet connection
   */
  connectButton?: React.ReactNode;
}

export default function TokenExplorer({
  tokenAddress,
  auctionRenderer,
  tokenRenderer,
  connectButton,
  ...props
}: TokenExplorerProps) {
  const { nftCount } = useDaoCollectionQuery({ tokenAddress: tokenAddress });

  const [tokenId, setTokenId] = React.useState<number>();

  React.useEffect(() => {
    nftCount && setTokenId(nftCount - 1);
  }, [nftCount]);

  const incrementId = React.useCallback(() => {
    if (typeof tokenId === 'undefined') return;
    if (nftCount && tokenId < nftCount - 1) {
      setTokenId(tokenId + 1);
    }
  }, [nftCount, tokenId]);

  // const decrementId = React.useCallback(() => {
  //   if (nftCount && tokenId > 0) {
  //     setTokenId(tokenId - 1);
  //   }
  // }, [nftCount, tokenId]);

  if (!nftCount || typeof tokenId === 'undefined') return null;

  return (
    <div {...props} className='flex flex-col gap-2 bg-offwhite pt-1'>
      {tokenId === nftCount - 1 ? (
        <>
          {auctionRenderer || (
            <CurrentAuction
              tokenAddress={tokenAddress}
              connectButton={connectButton}
            />
          )}
        </>
      ) : (
        <>
          {tokenRenderer ? (
            tokenRenderer(tokenId.toString())
          ) : (
            <TokenRenderer
              tokenAddress={tokenAddress}
              tokenId={tokenId.toString()}
            />
          )}
        </>
      )}
      <div className='mx-auto mt-2 mb-4 flex flex-row gap-1'>
        {/* <button
          onClick={decrementId}
          className={`${tokenId === 0 && 'pointer-events-none opacity-20'}`}
        >
          <Image src='svg/left.svg' alt='Last token' width={16} height={14} />
        </button> */}
        <a href={`https://nouns.build/dao/${tokenAddress}/${tokenId - 1}`}>
          <Image src='svg/left.svg' alt='Last token' width={16} height={14} />
        </a>
        <button
          onClick={incrementId}
          className={`${
            tokenId === nftCount - 1 && 'pointer-events-none opacity-20'
          }`}
        >
          <Image src='svg/right.svg' alt='Next token' width={16} height={14} />
        </button>
      </div>
    </div>
  );
}
