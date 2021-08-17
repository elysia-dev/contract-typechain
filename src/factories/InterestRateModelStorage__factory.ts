/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { InterestRateModelStorage } from "../InterestRateModelStorage";

export class InterestRateModelStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InterestRateModelStorage> {
    return super.deploy(overrides || {}) as Promise<InterestRateModelStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InterestRateModelStorage {
    return super.attach(address) as InterestRateModelStorage;
  }
  connect(signer: Signer): InterestRateModelStorage__factory {
    return super.connect(signer) as InterestRateModelStorage__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InterestRateModelStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as InterestRateModelStorage;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x4990c3c7",
        type: "bytes32",
      },
    ],
    name: "c_0x4990c3c7",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060988061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c5d51ccc14602d575b600080fd5b60436004803603810190603f91906048565b6045565b005b50565b6000602082840312156058578081fd5b813590509291505056fea2646970667358221220c246fbe7d8c7ae2c41a9eec012ad54fc6ce1cd916c9c4c605fde61f68bd4ecca64736f6c63430008030033";