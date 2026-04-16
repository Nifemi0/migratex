import React from 'react';
import { useConnect as uc } from 'wagmi';

export function Example() {
  const connect = uc({ onConnected: () => console.log('ok'), onFailure: (e: any) => console.error(e) });
  return <div>{JSON.stringify(connect)}</div>;
}
