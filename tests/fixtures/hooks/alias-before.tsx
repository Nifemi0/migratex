import React from 'react';
import { useConnect as uc } from 'wagmi';

export function Example() {
  const connect = uc({ onSuccess: () => console.log('ok'), onError: (e: any) => console.error(e) });
  return <div>{JSON.stringify(connect)}</div>;
}
