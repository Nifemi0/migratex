import * as Wagmi from 'wagmi';

export function Example() {
  const account = Wagmi.useAccount();
  return <div>{String(account)}</div>;
}
