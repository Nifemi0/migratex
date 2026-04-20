import { erc20ABI, readContract } from 'wagmi';

export async function run() {
  return readContract({ abi: erc20ABI });
}
