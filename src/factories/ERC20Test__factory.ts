/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Test, ERC20TestInterface } from "../ERC20Test";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "faucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000cd238038062000cd28339810160408190526200003491620002dc565b8151829082906200004d90600390602085019062000183565b5080516200006390600490602084019062000183565b50505062000080336002856200007a919062000372565b6200009b565b62000092306200007a60028662000372565b505050620003e6565b6001600160a01b038216620000f65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200010a91906200034d565b90915550506001600160a01b03821660009081526020819052604081208054839290620001399084906200034d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001919062000393565b90600052602060002090601f016020900481019282620001b5576000855562000200565b82601f10620001d057805160ff191683800117855562000200565b8280016001018555821562000200579182015b8281111562000200578251825591602001919060010190620001e3565b506200020e92915062000212565b5090565b5b808211156200020e576000815560010162000213565b600082601f8301126200023a578081fd5b81516001600160401b0380821115620002575762000257620003d0565b604051601f8301601f19908116603f01168101908282118183101715620002825762000282620003d0565b816040528381526020925086838588010111156200029e578485fd5b8491505b83821015620002c15785820183015181830184015290820190620002a2565b83821115620002d257848385830101525b9695505050505050565b600080600060608486031215620002f1578283fd5b835160208501519093506001600160401b038082111562000310578384fd5b6200031e8783880162000229565b9350604086015191508082111562000334578283fd5b50620003438682870162000229565b9150509250925092565b600082198211156200036d57634e487b7160e01b81526011600452602481fd5b500190565b6000826200038e57634e487b7160e01b81526012600452602481fd5b500490565b600181811c90821680620003a857607f821691505b60208210811415620003ca57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6108dc80620003f66000396000f3fe608060405234801561001057600080fd5b50600436106100a45760003560e01c806306fdde03146100a9578063095ea7b3146100c757806318160ddd146100ea57806323b872dd146100fc578063313ce5671461010f578063395093511461011e57806370a082311461013157806395d89b4114610144578063a457c2d71461014c578063a9059cbb1461015f578063dd62ed3e14610172578063de5f72fd146101ab575b600080fd5b6100b16101b5565b6040516100be91906107f4565b60405180910390f35b6100da6100d53660046107cb565b610247565b60405190151581526020016100be565b6002545b6040519081526020016100be565b6100da61010a366004610790565b61025d565b604051601281526020016100be565b6100da61012c3660046107cb565b61030c565b6100ee61013f36600461073d565b610348565b6100b1610367565b6100da61015a3660046107cb565b610376565b6100da61016d3660046107cb565b61040f565b6100ee61018036600461075e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101b361041c565b005b6060600380546101c49061086b565b80601f01602080910402602001604051908101604052809291908181526020018280546101f09061086b565b801561023d5780601f106102125761010080835404028352916020019161023d565b820191906000526020600020905b81548152906001019060200180831161022057829003601f168201915b5050505050905090565b6000610254338484610433565b50600192915050565b600061026a848484610557565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156102f45760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103018533858403610433565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610254918590610343908690610847565b610433565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101c49061086b565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156103f85760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016102eb565b6104053385858403610433565b5060019392505050565b6000610254338484610557565b610431303369021e19e0c9bab2400000610557565b565b6001600160a01b0383166104955760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016102eb565b6001600160a01b0382166104f65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016102eb565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105bb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016102eb565b6001600160a01b03821661061d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016102eb565b6001600160a01b038316600090815260208190526040902054818110156106955760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016102eb565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106cc908490610847565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161071891815260200190565b60405180910390a350505050565b80356001600160a01b038116811461036257600080fd5b60006020828403121561074e578081fd5b61075782610726565b9392505050565b60008060408385031215610770578081fd5b61077983610726565b915061078760208401610726565b90509250929050565b6000806000606084860312156107a4578081fd5b6107ad84610726565b92506107bb60208501610726565b9150604084013590509250925092565b600080604083850312156107dd578182fd5b6107e683610726565b946020939093013593505050565b6000602080835283518082850152825b8181101561082057858101830151858201604001528201610804565b818111156108315783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561086657634e487b7160e01b81526011600452602481fd5b500190565b600181811c9082168061087f57607f821691505b602082108114156108a057634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220bdf2fbbcdecd05b508d38d61e178b44c8997ba1567bfb74b9fc22d4e4c8cc56664736f6c63430008030033";

type ERC20TestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20TestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Test__factory extends ContractFactory {
  constructor(...args: ERC20TestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    totalSupply_: BigNumberish,
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Test> {
    return super.deploy(
      totalSupply_,
      name_,
      symbol_,
      overrides || {}
    ) as Promise<ERC20Test>;
  }
  getDeployTransaction(
    totalSupply_: BigNumberish,
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      totalSupply_,
      name_,
      symbol_,
      overrides || {}
    );
  }
  attach(address: string): ERC20Test {
    return super.attach(address) as ERC20Test;
  }
  connect(signer: Signer): ERC20Test__factory {
    return super.connect(signer) as ERC20Test__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20TestInterface {
    return new utils.Interface(_abi) as ERC20TestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Test {
    return new Contract(address, _abi, signerOrProvider) as ERC20Test;
  }
}
