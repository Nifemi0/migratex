import { useNetwork } from 'wagmi';

export function Example() {
  const { chain } = useNetwork();
  return <div>{chain?.id}</div>;
}
