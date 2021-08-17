/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { InterestRateModel } from "../InterestRateModel";

export class InterestRateModel__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    optimalUtilizationRate: BigNumberish,
    borrowRateBase: BigNumberish,
    borrowRateOptimal: BigNumberish,
    borrowRateMax: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InterestRateModel> {
    return super.deploy(
      optimalUtilizationRate,
      borrowRateBase,
      borrowRateOptimal,
      borrowRateMax,
      overrides || {}
    ) as Promise<InterestRateModel>;
  }
  getDeployTransaction(
    optimalUtilizationRate: BigNumberish,
    borrowRateBase: BigNumberish,
    borrowRateOptimal: BigNumberish,
    borrowRateMax: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      optimalUtilizationRate,
      borrowRateBase,
      borrowRateOptimal,
      borrowRateMax,
      overrides || {}
    );
  }
  attach(address: string): InterestRateModel {
    return super.attach(address) as InterestRateModel;
  }
  connect(signer: Signer): InterestRateModel__factory {
    return super.connect(signer) as InterestRateModel__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InterestRateModel {
    return new Contract(address, _abi, signerOrProvider) as InterestRateModel;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "optimalUtilizationRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRateBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRateOptimal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRateMax",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lTokenAssetBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalDTokenBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "moneyPoolFactor",
        type: "uint256",
      },
    ],
    name: "calculateRates",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161040c38038061040c83398101604081905261002f91610046565b60009390935560019190915560025560035561007b565b6000806000806080858703121561005b578384fd5b505082516020840151604085015160609095015191969095509092509050565b6103828061008a6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806309d10c5314610030575b600080fd5b61004361003e36600461028e565b61005c565b6040805192835260208301919091520160405180910390f35b60008061008a6040518060800160405280600081526020016000815260200160008152602001600081525090565b86815260008561009a888b6102c8565b6100a4919061031f565b8251909150156100cb5781516100c6906100be90836102c8565b8351906101ae565b6100ce565b60005b6020830181905260006040840181905254106101255761010e8260200151610108600054600154600254610102919061031f565b906101ae565b90610238565b60015461011b91906102c8565b604083015261017f565b61016c600254836020015161013a919061031f565b610108600054610152676765c793fa10079d601b1b90565b61015c919061031f565b600254600354610102919061031f565b60025461017991906102c8565b60408301525b6020820151604083015161019291610238565b6060830181905260409092015199919850909650505050505050565b6000816101f45760405162461bcd60e51b815260206004820152601060248201526f4469766973696f6e206279205a65726f60801b604482015260640160405180910390fd5b60006102016002846102e0565b9050828161021a676765c793fa10079d601b1b87610300565b61022491906102c8565b61022e91906102e0565b9150505b92915050565b6000821580610245575081155b1561025257506000610232565b676765c793fa10079d601b1b6102696002826102e0565b6102738486610300565b61027d91906102c8565b61028791906102e0565b9392505050565b600080600080600060a086880312156102a5578081fd5b505083359560208501359550604085013594606081013594506080013592509050565b600082198211156102db576102db610336565b500190565b6000826102fb57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561031a5761031a610336565b500290565b60008282101561033157610331610336565b500390565b634e487b7160e01b600052601160045260246000fdfea264697066735822122057d3a3f736223e93ead0fdfd1ba1b6d8ab2cdbd13c3d0aa370c49bd7ecfbe92664736f6c63430008030033";
