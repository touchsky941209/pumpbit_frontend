"use client"
import {
    createContext,
    useEffect,
    useState,
    useCallback,
    useMemo,
} from 'react';
import Web3 from 'web3';
import { ethers, Contract, ContractRunner } from 'ethers';
import { useAccount, useChainId } from 'wagmi';

import { useEthersProvider, useEthersSigner } from '@/utils/wagmi-ethers';
import { Web3ContextType } from '../types';
import {
    b2testnet_OrderBook_Address,
    b2testnet_MarketDescriptorDeployer_Address,
    b2testnet_USDC_Address,
    b2testnet_Router_Address,
    b2testnet_PositionRouter_Address,
    b2testnet_Faucet_Address,

    ailayertestnet_OrderBook_Address,
    ailayertestnet_USDC_Address,
    ailayertestnet_Router_Address,
    ailayertestnet_MarketDescriptorDeployer_Address,
    ailayertestnet_PositionRouter_Address,
    ailayertestnet_Faucet_Address,

    bevmtestnet_Faucet_Address,
    bevmtestnet_MarketDescriptorDeployer_Address,
    bevmtestnet_OrderBook_Address,
    bevmtestnet_PositionRouter_Address,
    bevmtestnet_Router_Address,
    bevmtestnet_USDC_Address,

    b2testnetChainId,
    ailayertestnetChainId,
    bevmtestnetChainId
} from '@/constants';

import orderBookAbi from "@/contracts/OrderBook.json"
import marketDescriptorDeployerAbi from "@/contracts/MarketDescriptorDeployer.json"
import usdcTokenContractAbi from "@/contracts/usdcAbi.json"
import routerContractAbi from "@/contracts/Router.json"
import positionRouterAbi from "@/contracts/PositionRouter.json"
import FaucetAbi from "@/contracts/Faucet.json"


declare let window: any;
const Web3Context = createContext<Web3ContextType | null>(null);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
    const { address, isConnected } = useAccount();
    const chainId = useChainId();
    const signer = useEthersSigner();
    const ethersProvider = useEthersProvider();
    const defaultProvider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
    let web3: any;

    if (typeof window !== 'undefined' && window.ethereum) {
        web3 = new Web3(window.ethereum);
    }

    const [provider, setProvider] = useState<ContractRunner>(defaultProvider);

    const [usdcTokenContract, setUsdcTokenContract] = useState<Contract>({} as Contract)
    const [orderBookContract, setOrderBookContract] = useState<Contract>({} as Contract);
    const [routerContract, setRouterContract] = useState<Contract>({} as Contract)
    const [marketDescriptorDeployerContract, setMarketDescriptorDeployerContract] = useState<Contract>({} as Contract)
    const [positionRouterContract, setPositionRouterContract] = useState<Contract>({} as Contract)
    const [faucetContract, setFaucetContract] = useState<Contract>({} as Contract)
    const [isWeb3Loading, setIsWeb3Loading] = useState<boolean>(false)

    const init = useCallback(async () => {

        try {
            if (!isConnected || !ethersProvider) {
                console.log('Not connected wallet');
            } else {
                setProvider(ethersProvider);
                console.log('Connected wallet');
                console.log("gasPrice: ", await web3.eth.getGasPrice())
            }

            let _orderBookContract: any;
            let _usdcTokenContract: any
            let _routerContract: any
            let _marketDescriptorDeployerContract: any
            let _positionRouterContract: any
            let _faucetContract: any

            if (chainId === b2testnetChainId) {
                _orderBookContract = new web3.eth.Contract(
                    orderBookAbi,
                    b2testnet_OrderBook_Address
                );

                _usdcTokenContract = new web3.eth.Contract(
                    usdcTokenContractAbi,
                    b2testnet_USDC_Address
                );

                _routerContract = new web3.eth.Contract(
                    routerContractAbi,
                    b2testnet_Router_Address
                );

                _marketDescriptorDeployerContract = new web3.eth.Contract(
                    marketDescriptorDeployerAbi,
                    b2testnet_MarketDescriptorDeployer_Address
                );

                _positionRouterContract = new web3.eth.Contract(
                    positionRouterAbi,
                    b2testnet_PositionRouter_Address
                );

                _faucetContract = new web3.eth.Contract(
                    FaucetAbi,
                    b2testnet_Faucet_Address
                );
            }
            
            if (chainId === ailayertestnetChainId) {
                _orderBookContract = new web3.eth.Contract(
                    orderBookAbi,
                    ailayertestnet_OrderBook_Address
                );

                _usdcTokenContract = new web3.eth.Contract(
                    usdcTokenContractAbi,
                    ailayertestnet_USDC_Address
                )

                _routerContract = new web3.eth.Contract(
                    routerContractAbi,
                    ailayertestnet_Router_Address
                )

                _marketDescriptorDeployerContract = new web3.eth.Contract(
                    marketDescriptorDeployerAbi,
                    ailayertestnet_MarketDescriptorDeployer_Address
                )

                _positionRouterContract = new web3.eth.Contract(
                    positionRouterAbi,
                    ailayertestnet_PositionRouter_Address
                )

                _faucetContract = new web3.eth.Contract(
                    FaucetAbi,
                    ailayertestnet_Faucet_Address
                )
            }

            if (chainId === bevmtestnetChainId) {
                _orderBookContract = new web3.eth.Contract(
                    orderBookAbi,
                    bevmtestnet_OrderBook_Address
                );

                _usdcTokenContract = new web3.eth.Contract(
                    usdcTokenContractAbi,
                    bevmtestnet_USDC_Address
                )

                _routerContract = new web3.eth.Contract(
                    routerContractAbi,
                    bevmtestnet_Router_Address
                )

                _marketDescriptorDeployerContract = new web3.eth.Contract(
                    marketDescriptorDeployerAbi,
                    bevmtestnet_MarketDescriptorDeployer_Address
                )

                _positionRouterContract = new web3.eth.Contract(
                    positionRouterAbi,
                    bevmtestnet_PositionRouter_Address
                )

                _faucetContract = new web3.eth.Contract(
                    FaucetAbi,
                    bevmtestnet_Faucet_Address
                )

            }

            setOrderBookContract(_orderBookContract);
            setUsdcTokenContract(_usdcTokenContract)
            setRouterContract(_routerContract)
            setMarketDescriptorDeployerContract(_marketDescriptorDeployerContract)
            setPositionRouterContract(_positionRouterContract)
            setFaucetContract(_faucetContract)
            setIsWeb3Loading(true)
        } catch (err) {
            // console.log(err);
        }
    }, [isConnected, ethersProvider, provider]);

    useEffect(() => {
        init();

    }, [init]);



    const value = useMemo(
        () => ({
            account: address,
            web3,
            chainId,
            isConnected,
            library: provider ?? signer,
            orderBookContract,
            usdcTokenContract,
            routerContract,
            marketDescriptorDeployerContract,
            positionRouterContract,
            faucetContract,
            isWeb3Loading
        }),
        [
            address,
            web3,
            chainId,
            isConnected,
            provider,
            signer,
            orderBookContract,
            marketDescriptorDeployerContract,
            usdcTokenContract,
            routerContract,
            positionRouterContract,
            faucetContract,
            isWeb3Loading
        ]
    );
    return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

export default Web3Context;
