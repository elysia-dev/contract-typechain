/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStakingPool, IStakingPoolInterface } from "../IStakingPool";

const _abi = [
  {
    inputs: [],
    name: "InvaidAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "principal",
        type: "uint256",
      },
    ],
    name: "NotEnoughPrincipal",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInRound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "round",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "currentRound",
        type: "uint8",
      },
    ],
    name: "NotInitiatedRound",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "RoundConflicted",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingNotInitiated",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroPrincipal",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroReward",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardLeft",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "currentRound",
        type: "uint8",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPerSecond",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentRound",
        type: "uint256",
      },
    ],
    name: "InitRound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "migrateRound",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "currentRound",
        type: "uint8",
      },
    ],
    name: "Migrate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userPrincipal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "currentRound",
        type: "uint8",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userPrincipal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "currentRound",
        type: "uint8",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "round",
        type: "uint8",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "round",
        type: "uint8",
      },
    ],
    name: "getPoolData",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardPerSecond",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalPrincipal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "round",
        type: "uint8",
      },
    ],
    name: "getRewardIndex",
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
        internalType: "uint8",
        name: "round",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserData",
    outputs: [
      {
        internalType: "uint256",
        name: "userIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "userReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "userPrincipal",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "round",
        type: "uint8",
      },
    ],
    name: "getUserReward",
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
        internalType: "uint256",
        name: "rewardPerSecond",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "year",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "month",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "day",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "duration",
        type: "uint8",
      },
    ],
    name: "initNewRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "round",
        type: "uint8",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "round",
        type: "uint8",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IStakingPool__factory {
  static readonly abi = _abi;
  static createInterface(): IStakingPoolInterface {
    return new utils.Interface(_abi) as IStakingPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStakingPool {
    return new Contract(address, _abi, signerOrProvider) as IStakingPool;
  }
}
