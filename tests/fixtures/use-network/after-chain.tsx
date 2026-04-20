import { useAccount } from 'wagmi';

export function Example() {
  const { chain } = useAccount();
  return <div>{chain?.id}</div>;
}
