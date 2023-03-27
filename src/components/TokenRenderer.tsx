import {
  TokenHolder,
  TokenThumbnail,
  TokenTitle,
  TokenWinningBid,
} from '@public-assembly/dao-utils';

export default function TokenRenderer({
  tokenId,
  tokenAddress,
  ...props
}: {
  tokenAddress: `0x${string}`;
  tokenId: string;
}) {
  return (
    <div
      className='grid max-w-[1440px] grid-cols-1 gap-4 lg:grid-cols-2'
      {...props}
    >
      <TokenThumbnail tokenId={tokenId} tokenAddress={tokenAddress} />
      <div className='flex flex-col justify-end gap-4'>
        <TokenTitle tokenAddress={tokenAddress} tokenId={tokenId} />
        <div className='flex flex-row gap-10'>
          <TokenHolder tokenAddress={tokenAddress} tokenId={tokenId} />
          <TokenWinningBid tokenAddress={tokenAddress} tokenId={tokenId} />
        </div>
      </div>
    </div>
  );
}
