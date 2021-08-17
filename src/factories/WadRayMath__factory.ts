/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { WadRayMath } from "../WadRayMath";

export class WadRayMath__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WadRayMath> {
    return super.deploy(overrides || {}) as Promise<WadRayMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WadRayMath {
    return super.attach(address) as WadRayMath;
  }
  connect(signer: Signer): WadRayMath__factory {
    return super.connect(signer) as WadRayMath__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WadRayMath {
    return new Contract(address, _abi, signerOrProvider) as WadRayMath;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xa2677ec0",
        type: "bytes32",
      },
    ],
    name: "c_0xa2677ec0",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60a3610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80633e6147dd146038575b600080fd5b604e6004803603810190604a91906053565b6050565b005b50565b6000602082840312156063578081fd5b813590509291505056fea264697066735822122033603da2b6e40d70d6021fa14df7a8e7de800e36989af28553767c44e52ac6de64736f6c63430008030033";
