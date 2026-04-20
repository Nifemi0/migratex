import { useReadContract } from 'wagmi';

export function Example() {
  const result = useReadContract({
    address: '0x0000000000000000000000000000000000000000',
    abi: [],
    functionName: 'name',
    enabled: true,
    staleTime: 1_000,
  });
  return <div>{String(result.data)}</div>;
}
