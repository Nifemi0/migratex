import { useNetwork } from 'wagmi';

export function Example() {
  const { chains } = useNetwork();
  return <div>{chains.length}</div>;
}
