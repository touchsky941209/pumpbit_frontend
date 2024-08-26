"use client"
import { useContext } from 'react';

import Web3Context from '@/contexts/web3context';
import UtilContext from "@/contexts/utilcontext"
export const useWeb3 = () => {
  const context = useContext(Web3Context);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};


export const useUtilContext = () => {
  const context = useContext(UtilContext);
  if (!context) throw new Error("context must be use inside provider");
  return context
}

