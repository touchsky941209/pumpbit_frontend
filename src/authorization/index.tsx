export const getTypedData = async (domain: string, address: string, chain: string, web3: any) => {
    const response = await fetch(`${domain}/v1/auth/login?chain=${chain}&address=${address}`);
    const data = await response.json();
    return data.data.sign_data;
}

export const signTypedData = (typedData: any, web3: any) => {
    return new Promise((resolve, reject) => {
        web3.currentProvider.send({
            method: 'eth_signTypedData_v4',
            params: [web3.currentProvider.selectedAddress, JSON.stringify(typedData)],
            from: web3.currentProvider.selectedAddress,
        }, (err: any, result: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.result);
            }
        });
    });
}

export const getAuthorization = async (domain: string, address: string, chain: string, walletType: string, web3: any) => {
    const typedData = await getTypedData(domain, address, chain, web3);
    const signature = await signTypedData(typedData, web3);

    const response = await fetch(`${domain}/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            address: address,
            signature: signature,
            chain: chain,
            wallet_type: walletType,
        }),
    });

    const data = await response.json();
    return data.data.access_token;
}

export const Authorization = async (account: string, web3: any) => {
    const domain = "https://api.inftytrade.xyz";
    const market = "btcusdt"
    const chain = "b_square_testnet";
    const walletType = "metamask";
    try {

        const result = await getAuthorization(
            domain,
            account,
            chain,
            walletType,
            web3
        )
        return result
    } catch (err) {
        console.log("Erro =>>>>>>>>>>", err)
    }

    return false
}
