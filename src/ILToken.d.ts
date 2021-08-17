/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ILTokenInterface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(address,address,uint256,uint256)": FunctionFragment;
    "getUnderlyingAsset()": FunctionFragment;
    "implicitBalanceOf(address)": FunctionFragment;
    "implicitTotalSupply()": FunctionFragment;
    "mint(address,uint256,uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferUnderlyingTo(address,uint256)": FunctionFragment;
    "updateIncentivePool(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "implicitBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "implicitTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferUnderlyingTo",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateIncentivePool",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implicitBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implicitTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferUnderlyingTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateIncentivePool",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "BalanceTransfer(address,address,uint256,uint256)": EventFragment;
    "Burn(address,address,uint256,uint256)": EventFragment;
    "Mint(address,uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BalanceTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class ILToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ILTokenInterface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      account: string,
      receiver: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "burn(address,address,uint256,uint256)"(
      account: string,
      receiver: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getUnderlyingAsset(overrides?: CallOverrides): Promise<[string]>;

    "getUnderlyingAsset()"(overrides?: CallOverrides): Promise<[string]>;

    implicitBalanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "implicitBalanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    implicitTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "implicitTotalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      account: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mint(address,uint256,uint256)"(
      account: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferUnderlyingTo(
      underlyingAssetReceiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferUnderlyingTo(address,uint256)"(
      underlyingAssetReceiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateIncentivePool(
      newIncentivePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateIncentivePool(address)"(
      newIncentivePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    account: string,
    receiver: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "burn(address,address,uint256,uint256)"(
    account: string,
    receiver: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getUnderlyingAsset(overrides?: CallOverrides): Promise<string>;

  "getUnderlyingAsset()"(overrides?: CallOverrides): Promise<string>;

  implicitBalanceOf(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "implicitBalanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  implicitTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "implicitTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    account: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mint(address,uint256,uint256)"(
    account: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferUnderlyingTo(
    underlyingAssetReceiver: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferUnderlyingTo(address,uint256)"(
    underlyingAssetReceiver: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateIncentivePool(
    newIncentivePool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateIncentivePool(address)"(
    newIncentivePool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      account: string,
      receiver: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "burn(address,address,uint256,uint256)"(
      account: string,
      receiver: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getUnderlyingAsset(overrides?: CallOverrides): Promise<string>;

    "getUnderlyingAsset()"(overrides?: CallOverrides): Promise<string>;

    implicitBalanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "implicitBalanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implicitTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "implicitTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      account: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(address,uint256,uint256)"(
      account: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferUnderlyingTo(
      underlyingAssetReceiver: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferUnderlyingTo(address,uint256)"(
      underlyingAssetReceiver: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateIncentivePool(
      newIncentivePool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateIncentivePool(address)"(
      newIncentivePool: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    BalanceTransfer(
      account: string | null,
      to: string | null,
      amount: null,
      index: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { account: string; to: string; amount: BigNumber; index: BigNumber }
    >;

    Burn(
      account: string | null,
      underlyingAssetReceiver: string | null,
      amount: null,
      index: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        account: string;
        underlyingAssetReceiver: string;
        amount: BigNumber;
        index: BigNumber;
      }
    >;

    Mint(
      account: string | null,
      amount: null,
      index: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { account: string; amount: BigNumber; index: BigNumber }
    >;

    Transfer(
      from: string | null,
      to: string | null,
      value: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      account: string,
      receiver: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "burn(address,address,uint256,uint256)"(
      account: string,
      receiver: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getUnderlyingAsset(overrides?: CallOverrides): Promise<BigNumber>;

    "getUnderlyingAsset()"(overrides?: CallOverrides): Promise<BigNumber>;

    implicitBalanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "implicitBalanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implicitTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "implicitTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      account: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mint(address,uint256,uint256)"(
      account: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferUnderlyingTo(
      underlyingAssetReceiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferUnderlyingTo(address,uint256)"(
      underlyingAssetReceiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateIncentivePool(
      newIncentivePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateIncentivePool(address)"(
      newIncentivePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      account: string,
      receiver: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "burn(address,address,uint256,uint256)"(
      account: string,
      receiver: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getUnderlyingAsset(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUnderlyingAsset()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implicitBalanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "implicitBalanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implicitTotalSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "implicitTotalSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      account: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mint(address,uint256,uint256)"(
      account: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferUnderlyingTo(
      underlyingAssetReceiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferUnderlyingTo(address,uint256)"(
      underlyingAssetReceiver: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateIncentivePool(
      newIncentivePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateIncentivePool(address)"(
      newIncentivePool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
