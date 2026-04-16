import React from 'react';
import { useAccount as useAccount } from 'wagmi';

export function Example() {
  const account = useAccount();
  return <div>{String(account)}</div>;
}
