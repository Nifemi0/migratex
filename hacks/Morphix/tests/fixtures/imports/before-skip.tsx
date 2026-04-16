import React from 'react';
import { useWallet, unknownHook } from 'wagmi';

export function Example() {
  const a = useWallet();
  const b = unknownHook();
  return <div>{String(a) + String(b)}</div>;
}
