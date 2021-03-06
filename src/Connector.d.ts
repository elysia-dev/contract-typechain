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

interface ConnectorInterface extends ethers.utils.Interface {
  functions: {
    "addCollateralServiceProvider(address)": FunctionFragment;
    "addCouncil(address)": FunctionFragment;
    "isCollateralServiceProvider(address)": FunctionFragment;
    "isCouncil(address)": FunctionFragment;
    "isMoneyPoolAdmin(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "revokeCollateralServiceProvider(address)": FunctionFragment;
    "revokeCouncil(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addCollateralServiceProvider",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "addCouncil", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isCollateralServiceProvider",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isCouncil", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isMoneyPoolAdmin",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeCollateralServiceProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeCouncil",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCollateralServiceProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addCouncil", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isCollateralServiceProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isCouncil", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isMoneyPoolAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeCollateralServiceProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeCouncil",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "CollateralServiceProviderRevoked(address)": EventFragment;
    "CouncilRevoked(address)": EventFragment;
    "NewCollateralServiceProviderAdded(address)": EventFragment;
    "NewCouncilAdded(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "CollateralServiceProviderRevoked"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CouncilRevoked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewCollateralServiceProviderAdded"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCouncilAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class Connector extends Contract {
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

  interface: ConnectorInterface;

  functions: {
    addCollateralServiceProvider(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addCollateralServiceProvider(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addCouncil(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addCouncil(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isCollateralServiceProvider(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isCollateralServiceProvider(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isCouncil(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isCouncil(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isMoneyPoolAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isMoneyPoolAdmin(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeCollateralServiceProvider(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "revokeCollateralServiceProvider(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeCouncil(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "revokeCouncil(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addCollateralServiceProvider(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addCollateralServiceProvider(address)"(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addCouncil(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addCouncil(address)"(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isCollateralServiceProvider(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isCollateralServiceProvider(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isCouncil(account: string, overrides?: CallOverrides): Promise<boolean>;

  "isCouncil(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isMoneyPoolAdmin(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isMoneyPoolAdmin(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeCollateralServiceProvider(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "revokeCollateralServiceProvider(address)"(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeCouncil(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "revokeCouncil(address)"(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addCollateralServiceProvider(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addCollateralServiceProvider(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addCouncil(account: string, overrides?: CallOverrides): Promise<void>;

    "addCouncil(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isCollateralServiceProvider(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isCollateralServiceProvider(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isCouncil(account: string, overrides?: CallOverrides): Promise<boolean>;

    "isCouncil(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isMoneyPoolAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isMoneyPoolAdmin(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    revokeCollateralServiceProvider(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "revokeCollateralServiceProvider(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeCouncil(account: string, overrides?: CallOverrides): Promise<void>;

    "revokeCouncil(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CollateralServiceProviderRevoked(
      account: string | null
    ): TypedEventFilter<[string], { account: string }>;

    CouncilRevoked(
      account: string | null
    ): TypedEventFilter<[string], { account: string }>;

    NewCollateralServiceProviderAdded(
      account: string | null
    ): TypedEventFilter<[string], { account: string }>;

    NewCouncilAdded(
      account: string | null
    ): TypedEventFilter<[string], { account: string }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addCollateralServiceProvider(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addCollateralServiceProvider(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addCouncil(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addCouncil(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isCollateralServiceProvider(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isCollateralServiceProvider(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCouncil(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isCouncil(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isMoneyPoolAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isMoneyPoolAdmin(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeCollateralServiceProvider(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "revokeCollateralServiceProvider(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeCouncil(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "revokeCouncil(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCollateralServiceProvider(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addCollateralServiceProvider(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addCouncil(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addCouncil(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isCollateralServiceProvider(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isCollateralServiceProvider(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCouncil(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isCouncil(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMoneyPoolAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isMoneyPoolAdmin(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeCollateralServiceProvider(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "revokeCollateralServiceProvider(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeCouncil(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "revokeCouncil(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
