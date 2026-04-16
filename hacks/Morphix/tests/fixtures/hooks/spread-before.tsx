import React from 'react';
import { useConnect } from 'wagmi';

const extras = { debug: true };

export function Example() {
  const connect = useConnect({ ...extras, onSuccess: () => console.log('ok') });
  return <div>{JSON.stringify(connect)}</div>;
}
