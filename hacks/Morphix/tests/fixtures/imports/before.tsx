import React from 'react';
import { useWallet as useW } from 'wagmi';

export function Example() {
  const account = useW();
  return <div>{String(account)}</div>;
}
