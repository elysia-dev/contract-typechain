/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IncentivePoolInterface extends utils.Interface {
  functions: {
    "amountPerSecond()": FunctionFragment;
    "beforeTokenTransfer(address,address)": FunctionFragment;
    "claimIncentive()": FunctionFragment;
    "endTimestamp()": FunctionFragment;
    "getIncentiveIndex()": FunctionFragment;
    "getIncentivePoolData()": FunctionFragment;
    "getUserIncentive(address)": FunctionFragment;
    "getUserIncentiveData(address)": FunctionFragment;
    "initializeIncentivePool(address)": FunctionFragment;
    "isClosed()": FunctionFragment;
    "lToken()": FunctionFragment;
    "setAmountPerSecond(uint256)": FunctionFragment;
    "setEndTimestamp(uint256)": FunctionFragment;
    "updateIncentivePool(address)": FunctionFragment;
    "withdrawResidue()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amountPerSecond",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beforeTokenTransfer",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimIncentive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "endTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIncentiveIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIncentivePoolData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserIncentive",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserIncentiveData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeIncentivePool",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isClosed", values?: undefined): string;
  encodeFunctionData(functionFragment: "lToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAmountPerSecond",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEndTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateIncentivePool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawResidue",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "amountPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncentiveIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncentivePoolData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserIncentiveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeIncentivePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isClosed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAmountPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEndTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateIncentivePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawResidue",
    data: BytesLike
  ): Result;

  events: {
    "ClaimIncentive(address,uint256,uint256)": EventFragment;
    "IncentiveEndTimestampUpdated(uint256)": EventFragment;
    "IncentivePoolEnded()": EventFragment;
    "RewardPerSecondUpdated(uint256)": EventFragment;
    "UpdateIncentivePool(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimIncentive"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "IncentiveEndTimestampUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncentivePoolEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPerSecondUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateIncentivePool"): EventFragment;
}

export type ClaimIncentiveEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; claimedIncentive: BigNumber; userIncentiveIndex: BigNumber }
>;

export type ClaimIncentiveEventFilter = TypedEventFilter<ClaimIncentiveEvent>;

export type IncentiveEndTimestampUpdatedEvent = TypedEvent<
  [BigNumber],
  { newEndTimestamp: BigNumber }
>;

export type IncentiveEndTimestampUpdatedEventFilter =
  TypedEventFilter<IncentiveEndTimestampUpdatedEvent>;

export type IncentivePoolEndedEvent = TypedEvent<[], {}>;

export type IncentivePoolEndedEventFilter =
  TypedEventFilter<IncentivePoolEndedEvent>;

export type RewardPerSecondUpdatedEvent = TypedEvent<
  [BigNumber],
  { newAmountPerSecond: BigNumber }
>;

export type RewardPerSecondUpdatedEventFilter =
  TypedEventFilter<RewardPerSecondUpdatedEvent>;

export type UpdateIncentivePoolEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; accruedIncentive: BigNumber; incentiveIndex: BigNumber }
>;

export type UpdateIncentivePoolEventFilter =
  TypedEventFilter<UpdateIncentivePoolEvent>;

export interface IncentivePool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IncentivePoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    amountPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    beforeTokenTransfer(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimIncentive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    getIncentiveIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    getIncentivePoolData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        incentiveIndex: BigNumber;
        lastUpdateTimestamp: BigNumber;
      }
    >;

    getUserIncentive(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserIncentiveData(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        userIndex: BigNumber;
        userReward: BigNumber;
        userLTokenBalance: BigNumber;
      }
    >;

    initializeIncentivePool(
      lToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isClosed(overrides?: CallOverrides): Promise<[boolean]>;

    lToken(overrides?: CallOverrides): Promise<[string]>;

    setAmountPerSecond(
      newAmountPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEndTimestamp(
      newEndTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateIncentivePool(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawResidue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  amountPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  beforeTokenTransfer(
    from: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimIncentive(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getIncentiveIndex(overrides?: CallOverrides): Promise<BigNumber>;

  getIncentivePoolData(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      incentiveIndex: BigNumber;
      lastUpdateTimestamp: BigNumber;
    }
  >;

  getUserIncentive(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  getUserIncentiveData(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      userIndex: BigNumber;
      userReward: BigNumber;
      userLTokenBalance: BigNumber;
    }
  >;

  initializeIncentivePool(
    lToken_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isClosed(overrides?: CallOverrides): Promise<boolean>;

  lToken(overrides?: CallOverrides): Promise<string>;

  setAmountPerSecond(
    newAmountPerSecond: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEndTimestamp(
    newEndTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateIncentivePool(
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawResidue(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    amountPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    beforeTokenTransfer(
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimIncentive(overrides?: CallOverrides): Promise<void>;

    endTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getIncentiveIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getIncentivePoolData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        incentiveIndex: BigNumber;
        lastUpdateTimestamp: BigNumber;
      }
    >;

    getUserIncentive(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserIncentiveData(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        userIndex: BigNumber;
        userReward: BigNumber;
        userLTokenBalance: BigNumber;
      }
    >;

    initializeIncentivePool(
      lToken_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isClosed(overrides?: CallOverrides): Promise<boolean>;

    lToken(overrides?: CallOverrides): Promise<string>;

    setAmountPerSecond(
      newAmountPerSecond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setEndTimestamp(
      newEndTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateIncentivePool(user: string, overrides?: CallOverrides): Promise<void>;

    withdrawResidue(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ClaimIncentive(address,uint256,uint256)"(
      user?: string | null,
      claimedIncentive?: null,
      userIncentiveIndex?: null
    ): ClaimIncentiveEventFilter;
    ClaimIncentive(
      user?: string | null,
      claimedIncentive?: null,
      userIncentiveIndex?: null
    ): ClaimIncentiveEventFilter;

    "IncentiveEndTimestampUpdated(uint256)"(
      newEndTimestamp?: null
    ): IncentiveEndTimestampUpdatedEventFilter;
    IncentiveEndTimestampUpdated(
      newEndTimestamp?: null
    ): IncentiveEndTimestampUpdatedEventFilter;

    "IncentivePoolEnded()"(): IncentivePoolEndedEventFilter;
    IncentivePoolEnded(): IncentivePoolEndedEventFilter;

    "RewardPerSecondUpdated(uint256)"(
      newAmountPerSecond?: null
    ): RewardPerSecondUpdatedEventFilter;
    RewardPerSecondUpdated(
      newAmountPerSecond?: null
    ): RewardPerSecondUpdatedEventFilter;

    "UpdateIncentivePool(address,uint256,uint256)"(
      user?: string | null,
      accruedIncentive?: null,
      incentiveIndex?: null
    ): UpdateIncentivePoolEventFilter;
    UpdateIncentivePool(
      user?: string | null,
      accruedIncentive?: null,
      incentiveIndex?: null
    ): UpdateIncentivePoolEventFilter;
  };

  estimateGas: {
    amountPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    beforeTokenTransfer(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimIncentive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getIncentiveIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getIncentivePoolData(overrides?: CallOverrides): Promise<BigNumber>;

    getUserIncentive(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserIncentiveData(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializeIncentivePool(
      lToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isClosed(overrides?: CallOverrides): Promise<BigNumber>;

    lToken(overrides?: CallOverrides): Promise<BigNumber>;

    setAmountPerSecond(
      newAmountPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEndTimestamp(
      newEndTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateIncentivePool(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawResidue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    amountPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beforeTokenTransfer(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimIncentive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIncentiveIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIncentivePoolData(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserIncentive(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserIncentiveData(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializeIncentivePool(
      lToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isClosed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAmountPerSecond(
      newAmountPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEndTimestamp(
      newEndTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateIncentivePool(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawResidue(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
