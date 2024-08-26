import { mainnet, merlin } from "wagmi/chains";
import { Chain, } from "@rainbow-me/rainbowkit";
import { http } from "wagmi"
export const mainnetwork = mainnet
export const merlinnetwork = merlin

export const bitLayer = {
    id: 200901,
    name: "Bitlayer Mainnet",
    nativeCurrency: {
        name: "BTC",
        symbol: "BTC",
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ["https://rpc.bitlayer-rpc.com"] },
    },
};

export const b2Network = {
    id: 223,
    name: "B2 Mainnet",
    nativeCurrency: {
        name: "BTC",
        symbol: "BTC",
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ["https://rpc.bsquared.network"] },
    },
};

export const b2TestNetwork = {
    id: 1123,
    name: "B2 Testnet",
    nativeCurrency: {
        name: "BTC",
        symbol: "BTC",
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ["https://b2-testnet.alt.technology"] }
        // default: { http: ["https://rpc.ankr.com/b2_testnet"] }
    }
}

export const AllLayer = {
    id: 2649,
    name: "AILayer Mainnet",
    nativeCurrency: {
        name: "BTC",
        symbol: "BTC",
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ["https://mainnet-rpc.ailayer.xyz"] },
    },
};

export const AlLayerTestNet = {
    id: 2648,
    name: "AILayer Testnet",
    nativeCurrency: {
        name: "BTC",
        symbol: "BTC",
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ["https://testnet-rpc.ailayer.xyz"] }
    }
}

export const BEVMTestnet = {
    id: 11503,
    name: "BEVM Testnet",
    nativeCurrency: {
        name: "BTC",
        symbol: "BTC",
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ["https://testnet.bevm.io/"] }
    }
}

export const chains: readonly [Chain, ...Chain[]] = [

    {
        ...b2TestNetwork,
        iconUrl: "/assets/icons/b2.svg",
    },
    {
        ...AlLayerTestNet,
        iconUrl: "/assets/icons/ailayer.svg",
    },
    {
        ...BEVMTestnet,
        iconUrl: "/assets/bevm.png"
    }
];

export const transports = {
    [b2TestNetwork.id]: http(),
    [AlLayerTestNet.id]: http(),
    [BEVMTestnet.id]: http(),
}