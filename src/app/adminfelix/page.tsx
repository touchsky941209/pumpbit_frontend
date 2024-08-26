"use client"
import { useWeb3 } from "@/hooks"
import {
    b2testnet_Faucet_Address,
    ailayertestnet_Faucet_Address,
    b2testnetChainId,
    ailayertestnetChainId,
    bevmtestnet_Faucet_Address,
} from "@/constants"
import { ethers } from "ethers"

const Admin = () => {
    const { faucetContract, usdcTokenContract, chainId, account, web3 } = useWeb3()

    const transferToken = async () => {
        let _faucetAddr: string = ""
        if (chainId === ailayertestnetChainId)
            _faucetAddr = ailayertestnet_Faucet_Address
        else if (chainId === b2testnetChainId)
            _faucetAddr = b2testnet_Faucet_Address

        try {
            await usdcTokenContract.methods.transfer(_faucetAddr, ethers.parseUnits("100000", 6)).send({ from: account })
            console.log("Token Transfter to contract is success")
        } catch (err) {
            console.log("Token Transfer failed")
        }
    }

    const airdropToken = async () => {
        if (!faucetContract) return;

        const gasPrice = await web3.eth.getGasPrice()

        try {
            await faucetContract.methods.claimTokens().send({ from: account, gasPrice: gasPrice })
        } catch (err) {
            console.log("Err: =>")
        }
    };

    const getBalance = async () => {
        try {
            const _balance = await usdcTokenContract.methods.balanceOf(account).call()
            const _balance1 = await usdcTokenContract.methods.balanceOf(b2testnet_Faucet_Address).call()
            console.log("Balance =>", _balance)
            console.log("Contract Balance  =>", _balance1)
        } catch (err) {

        }
    }

    return (
        <div>
            <button
                className="mt-[300px]"
                onClick={() => {
                    transferToken()
                }}>
                Transfter Token to Contract
            </button>

            <button
                className="mt-[300px] ml-[300px]"
                onClick={() => airdropToken()}>
                Airdrop
            </button>

            <button
                className="mt-[300px] ml-[300px]"
                onClick={() => getBalance()}>
                balance
            </button>
        </div>
    )
}

export default Admin