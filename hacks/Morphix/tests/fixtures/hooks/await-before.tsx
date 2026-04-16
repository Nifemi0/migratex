import React from 'react';
import { useConnect } from 'wagmi';

export async function Example() {
  const connect = await useConnect({ onSuccess: () => console.log('ok'), onError: (e: any) => console.error(e) });
  return <div>{JSON.stringify(connect)}</div>;
}
