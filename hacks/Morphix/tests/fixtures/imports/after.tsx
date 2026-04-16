import React from 'react';
import { useAccount as useW } from 'wagmi';

export function Example() {
  const account = useW();
  return <div>{String(account)}</div>;
}
