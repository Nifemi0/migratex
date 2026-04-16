import React from 'react';
import { useConnect } from 'wagmi';

export async function Example() {
  const connect = await useConnect({ onConnected: () => console.log('ok'), onFailure: (e: any) => console.error(e) });
  return <div>{JSON.stringify(connect)}</div>;
}
