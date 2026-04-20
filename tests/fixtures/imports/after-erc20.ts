import { readContract } from 'wagmi';
import { erc20Abi } from 'viem';

export async function run() {
  return readContract({ abi: erc20Abi });
}
