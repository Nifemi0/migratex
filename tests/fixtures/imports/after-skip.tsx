import React from 'react';
import { useAccount, unknownHook } from 'wagmi';

export function Example() {
  const a = useAccount();
  const b = unknownHook();
  return <div>{String(a) + String(b)}</div>;
}
