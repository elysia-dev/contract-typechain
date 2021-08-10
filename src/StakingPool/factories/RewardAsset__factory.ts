/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RewardAsset, RewardAssetInterface } from "../RewardAsset";

const _abi = [
  {
    inputs: [],
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
  "0x60806040523480156200001157600080fd5b5060408051808201825260068082526514995dd85c9960d21b602080840182815285518087019096529285528401528151919291620000539160039162000192565b5080516200006990600490602084019062000192565b5050506200008b336c064f964e68233a76f520000000620000aa60201b60201c565b620000a4306c064f964e68233a76f520000000620000aa565b6200029a565b6001600160a01b038216620001055760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000119919062000238565b90915550506001600160a01b038216600090815260208190526040812080548392906200014890849062000238565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001a0906200025d565b90600052602060002090601f016020900481019282620001c457600085556200020f565b82601f10620001df57805160ff19168380011785556200020f565b828001600101855582156200020f579182015b828111156200020f578251825591602001919060010190620001f2565b506200021d92915062000221565b5090565b5b808211156200021d576000815560010162000222565b600082198211156200025857634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806200027257607f821691505b602082108114156200029457634e487b7160e01b600052602260045260246000fd5b50919050565b6108e880620002aa6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461014157806395d89b411461016a578063a457c2d714610172578063a9059cbb14610185578063dd62ed3e14610198578063de5f72fd146101d157600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101db565b6040516100ce9190610800565b60405180910390f35b6100ea6100e53660046107d7565b61026d565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a36600461079c565b610283565b604051601281526020016100ce565b6100ea61013c3660046107d7565b610332565b6100fe61014f366004610749565b6001600160a01b031660009081526020819052604090205490565b6100c161036e565b6100ea6101803660046107d7565b61037d565b6100ea6101933660046107d7565b610416565b6100fe6101a636600461076a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101d9610423565b005b6060600380546101ea90610877565b80601f016020809104026020016040519081016040528092919081815260200182805461021690610877565b80156102635780601f1061023857610100808354040283529160200191610263565b820191906000526020600020905b81548152906001019060200180831161024657829003601f168201915b5050505050905090565b600061027a33848461043a565b50600192915050565b600061029084848461055e565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561031a5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b610327853385840361043a565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161027a918590610369908690610853565b61043a565b6060600480546101ea90610877565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156103ff5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610311565b61040c338585840361043a565b5060019392505050565b600061027a33848461055e565b610438303369021e19e0c9bab240000061055e565b565b6001600160a01b03831661049c5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610311565b6001600160a01b0382166104fd5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610311565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105c25760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610311565b6001600160a01b0382166106245760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610311565b6001600160a01b0383166000908152602081905260409020548181101561069c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610311565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106d3908490610853565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161071f91815260200190565b60405180910390a350505050565b80356001600160a01b038116811461074457600080fd5b919050565b60006020828403121561075a578081fd5b6107638261072d565b9392505050565b6000806040838503121561077c578081fd5b6107858361072d565b91506107936020840161072d565b90509250929050565b6000806000606084860312156107b0578081fd5b6107b98461072d565b92506107c76020850161072d565b9150604084013590509250925092565b600080604083850312156107e9578182fd5b6107f28361072d565b946020939093013593505050565b6000602080835283518082850152825b8181101561082c57858101830151858201604001528201610810565b8181111561083d5783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561087257634e487b7160e01b81526011600452602481fd5b500190565b600181811c9082168061088b57607f821691505b602082108114156108ac57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212209d612d29547654007b9ee8795f07e770649db41b9cda82764b94f2cf76a587c864736f6c63430008040033";

export class RewardAsset__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardAsset> {
    return super.deploy(overrides || {}) as Promise<RewardAsset>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RewardAsset {
    return super.attach(address) as RewardAsset;
  }
  connect(signer: Signer): RewardAsset__factory {
    return super.connect(signer) as RewardAsset__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardAssetInterface {
    return new utils.Interface(_abi) as RewardAssetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardAsset {
    return new Contract(address, _abi, signerOrProvider) as RewardAsset;
  }
}
