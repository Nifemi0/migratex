import React from 'react';
import { useConnect } from 'wagmi';

export function Example() {
  const connect = useConnect({ onConnected: () => console.log('ok'), onFailure: (e: any) => console.error(e) });
  return <div>{JSON.stringify(connect)}</div>;
}
