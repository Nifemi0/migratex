import React from 'react';
import { useConnect } from 'wagmi';

export function Example() {
  const connect = useConnect({ onSuccess: () => console.log('ok'), onError: (e: any) => console.error(e) });
  return <div>{JSON.stringify(connect)}</div>;
}
