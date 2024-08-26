"use client";

import React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";

import {
  tokenPocketWallet,
  bitgetWallet,
  okxWallet,
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  gateWallet,
} from "@rainbow-me/rainbowkit/wallets";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";

import { createConfig } from "wagmi";
import { Web3Provider } from "@/contexts/web3context";
import { UtilContextProvider } from "@/contexts/utilcontext"
import {
  chains,
  transports
} from "@/utils/network";

const projectId = "57826bfdbc6cd9752e192a296fbbd40d"

const { wallets } = getDefaultWallets({
  appName: "Pumpbit",
  projectId,
});

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        tokenPocketWallet,
        bitgetWallet,
        okxWallet,
        rainbowWallet,
        walletConnectWallet,
        metaMaskWallet,
        gateWallet,
      ],
    },
  ],
  {
    appName: "AIStarter",
    projectId: projectId,
  }
);

export const config = createConfig({
  connectors,
  chains,
  transports
});

const queryClient = new QueryClient();

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Web3Provider>
            <UtilContextProvider>
              {children}
            </UtilContextProvider>
          </Web3Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export { Providers };
