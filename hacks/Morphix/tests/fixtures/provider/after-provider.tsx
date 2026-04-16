import React from 'react';
import { WagmiConfig } from 'wagmi';

export function App() {
  return (
    <WagmiConfig client={client}>
      <div />
    </WagmiConfig>
  );
}
