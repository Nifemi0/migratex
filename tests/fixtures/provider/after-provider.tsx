import React from 'react';
import { WagmiProvider } from 'wagmi';

export function App() {
  return (
    <WagmiProvider client={client}>
      <div />
    </WagmiProvider>
  );
}
