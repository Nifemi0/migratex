import { useConfig } from 'wagmi';

export function Example() {
  const { chains } = useConfig();
  return <div>{chains.length}</div>;
}
