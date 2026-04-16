import * as Wagmi from 'wagmi';

export function Example() {
  const account = Wagmi.useWallet();
  return <div>{String(account)}</div>;
}
