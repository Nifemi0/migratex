import React from 'react';
import { useWallet as useAccount } from 'wagmi';

export function Example() {
  const account = useAccount();
  return <div>{String(account)}</div>;
}
