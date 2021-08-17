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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IConnectorInterface extends ethers.utils.Interface {
  functions: {
    "isCollateralServiceProvider(address)": FunctionFragment;
    "isCouncil(address)": FunctionFragment;
    "isMoneyPoolAdmin(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isCollateralServiceProvider",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isCouncil", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isMoneyPoolAdmin",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "isCollateralServiceProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isCouncil", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isMoneyPoolAdmin",
    data: BytesLike
  ): Result;

  events: {
    "CollateralServiceProviderRevoked(address)": EventFragment;
    "CouncilRevoked(address)": EventFragment;
    "NewCollateralServiceProviderAdded(address)": EventFragment;
    "NewCouncilAdded(address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "CollateralServiceProviderRevoked"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CouncilRevoked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewCollateralServiceProviderAdded"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCouncilAdded"): EventFragment;
}

export class IConnector extends Contract {
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

  interface: IConnectorInterface;

  functions: {
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
  };

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

  callStatic: {
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
  };

  estimateGas: {
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
  };

  populateTransaction: {
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
  };
}
