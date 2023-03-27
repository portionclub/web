import {
  AuthCheck,
  TokenThumbnail,
  useActiveAuction,
  useCountdown,
  useDaoCollectionQuery,
  useDaoToken,
} from '@public-assembly/dao-utils';

/**
 * TODO:
 * - render bid success txHash
 * - break ui out into atomic components
 */

export interface CurrentAuctionProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Nounish NFT Contract address
   */
  tokenAddress: `0x${string}`;
  connectButton?: React.ReactNode;
}

export default function CurrentAuction({
  tokenAddress,
  connectButton,
  ...props
}: CurrentAuctionProps) {
  const {
    auctionData,
    createBid,
    updateBidAmount,
    createBidSuccess,
    createBidLoading,
    isValidBid,
  } = useActiveAuction(tokenAddress);

  const { nftCount } = useDaoCollectionQuery({ tokenAddress: tokenAddress });
  const { tokenData } = useDaoToken({
    tokenAddress: tokenAddress,
    tokenId: auctionData.tokenId ?? '',
  });
  const { countdownString, isEnded } = useCountdown(
    Number(auctionData.endTime) || 0
  );

  return (
    <div {...props}>
      <div className='mx-auto w-8/12 font-secondary'>
        {auctionData.endTime && (
          <div className='flex w-full flex-col text-center'>
            {!isEnded ? (
              <>
                <span className='text-xl'>Auction ends</span>
                <span className='text-3xl'>{countdownString}</span>
              </>
            ) : (
              <span>Auction is complete</span>
            )}
          </div>
        )}
        {auctionData?.tokenId && (
          <div className='my-4 overflow-hidden rounded-lg border border-shadow bg-white'>
            <TokenThumbnail
              tokenId={auctionData.tokenId}
              tokenAddress={tokenAddress}
            />
          </div>
        )}
        <div className='flex flex-col justify-end'>
          {nftCount && (
            <span className='text-3xl'>{tokenData?.metadata?.name}</span>
            // <TokenTitle
            //   tokenAddress={tokenAddress}
            //   tokenId={(nftCount - 1).toString()}
            // />
          )}
          <div className='flex flex-col text-xl'>
            <div className='flex justify-between'>
              <span>Current Bid:</span>
              <span>{auctionData?.highestBidPrice} ETH</span>
            </div>
            <div className='flex justify-between'>
              <span>Bidder: </span>
              <span>{auctionData?.highestBidder}</span>
            </div>
          </div>
          <div className='my-4'>
            <AuthCheck
              connectButton={connectButton}
              connectCopy='Connect to bid'
              formUI={
                <div>
                  <form onSubmit={createBid} className='flex flex-row gap-1'>
                    <input
                      className='form-input flex-1 rounded-lg bg-transparent px-2 py-[5px]'
                      type='text'
                      pattern='[0-9.]*'
                      placeholder={`${auctionData?.minBidAmount} ETH`}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        updateBidAmount(event.target.value)
                      }
                    />
                    {!createBidLoading && !createBidSuccess ? (
                      <button
                        className={`${
                          !isValidBid && 'pointer-events-none opacity-20'
                        } rounded-lg bg-highlight px-4 py-3 text-sm`}
                      >
                        Place Bid
                      </button>
                    ) : (
                      <>
                        {createBidLoading && <span>Submitting bid</span>}
                        {createBidSuccess && (
                          <a
                            href={`https://nouns.build/dao/${tokenAddress}`}
                            target='_blank'
                            rel='noreferrer'
                          >
                            Bid placed: view on nouns.build
                          </a>
                        )}
                      </>
                    )}
                  </form>
                </div>
              }
            />
          </div>
        </div>
        <div>
          <a
            href={`https://nouns.build/dao/${tokenAddress}`}
            target='_blank'
            rel='noreferrer'
            className='text-lg text-blue-500'
          >
            View on Nouns Builder
          </a>
        </div>
      </div>
    </div>
  );
}
