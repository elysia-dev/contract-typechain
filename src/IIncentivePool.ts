/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export interface IIncentivePoolInterface extends utils.Interface {
  functions: {
    "beforeTokenTransfer(address,address)": FunctionFragment;
    "claimIncentive()": FunctionFragment;
    "initializeIncentivePool(address)": FunctionFragment;
    "updateIncentivePool(address)": FunctionFragment;
    "withdrawResidue()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "beforeTokenTransfer",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimIncentive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeIncentivePool",
    values: [string]
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
    functionFragment: "beforeTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeIncentivePool",
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
    "IncentivePoolEnded()": EventFragment;
    "UpdateIncentivePool(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimIncentive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncentivePoolEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateIncentivePool"): EventFragment;
}

export type ClaimIncentiveEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; claimedIncentive: BigNumber; userIncentiveIndex: BigNumber }
>;

export type ClaimIncentiveEventFilter = TypedEventFilter<ClaimIncentiveEvent>;

export type IncentivePoolEndedEvent = TypedEvent<[], {}>;

export type IncentivePoolEndedEventFilter =
  TypedEventFilter<IncentivePoolEndedEvent>;

export type UpdateIncentivePoolEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; accruedIncentive: BigNumber; incentiveIndex: BigNumber }
>;

export type UpdateIncentivePoolEventFilter =
  TypedEventFilter<UpdateIncentivePoolEvent>;

export interface IIncentivePool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IIncentivePoolInterface;

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
    beforeTokenTransfer(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimIncentive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeIncentivePool(
      lToken: string,
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

  beforeTokenTransfer(
    from: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimIncentive(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeIncentivePool(
    lToken: string,
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
    beforeTokenTransfer(
      from: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimIncentive(overrides?: CallOverrides): Promise<void>;

    initializeIncentivePool(
      lToken: string,
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

    "IncentivePoolEnded()"(): IncentivePoolEndedEventFilter;
    IncentivePoolEnded(): IncentivePoolEndedEventFilter;

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
    beforeTokenTransfer(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimIncentive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeIncentivePool(
      lToken: string,
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
    beforeTokenTransfer(
      from: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimIncentive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeIncentivePool(
      lToken: string,
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
