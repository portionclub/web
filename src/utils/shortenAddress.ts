import { getAddress } from 'ethers';

export function shortenAddress(address?: string, chars = 4): string {
  if (!address) {
    return '';
  }

  const parsed = getAddress(address);

  if (!parsed) {
    // eslint-disable-next-line no-console
    console.error(`Invalid 'address' parameter '${address}'.`);
    return '';
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}
