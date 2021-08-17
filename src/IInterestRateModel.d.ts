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

interface IInterestRateModelInterface extends ethers.utils.Interface {
  functions: {
    "calculateRates(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateRates",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateRates",
    data: BytesLike
  ): Result;

  events: {};
}

export class IInterestRateModel extends Contract {
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

  interface: IInterestRateModelInterface;

  functions: {
    calculateRates(
      lTokenAssetBalance: BigNumberish,
      totalDTokenBalance: BigNumberish,
      depositAmount: BigNumberish,
      borrowAmount: BigNumberish,
      moneyPoolFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    "calculateRates(uint256,uint256,uint256,uint256,uint256)"(
      lTokenAssetBalance: BigNumberish,
      totalDTokenBalance: BigNumberish,
      depositAmount: BigNumberish,
      borrowAmount: BigNumberish,
      moneyPoolFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  calculateRates(
    lTokenAssetBalance: BigNumberish,
    totalDTokenBalance: BigNumberish,
    depositAmount: BigNumberish,
    borrowAmount: BigNumberish,
    moneyPoolFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  "calculateRates(uint256,uint256,uint256,uint256,uint256)"(
    lTokenAssetBalance: BigNumberish,
    totalDTokenBalance: BigNumberish,
    depositAmount: BigNumberish,
    borrowAmount: BigNumberish,
    moneyPoolFactor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  callStatic: {
    calculateRates(
      lTokenAssetBalance: BigNumberish,
      totalDTokenBalance: BigNumberish,
      depositAmount: BigNumberish,
      borrowAmount: BigNumberish,
      moneyPoolFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    "calculateRates(uint256,uint256,uint256,uint256,uint256)"(
      lTokenAssetBalance: BigNumberish,
      totalDTokenBalance: BigNumberish,
      depositAmount: BigNumberish,
      borrowAmount: BigNumberish,
      moneyPoolFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    calculateRates(
      lTokenAssetBalance: BigNumberish,
      totalDTokenBalance: BigNumberish,
      depositAmount: BigNumberish,
      borrowAmount: BigNumberish,
      moneyPoolFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateRates(uint256,uint256,uint256,uint256,uint256)"(
      lTokenAssetBalance: BigNumberish,
      totalDTokenBalance: BigNumberish,
      depositAmount: BigNumberish,
      borrowAmount: BigNumberish,
      moneyPoolFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateRates(
      lTokenAssetBalance: BigNumberish,
      totalDTokenBalance: BigNumberish,
      depositAmount: BigNumberish,
      borrowAmount: BigNumberish,
      moneyPoolFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateRates(uint256,uint256,uint256,uint256,uint256)"(
      lTokenAssetBalance: BigNumberish,
      totalDTokenBalance: BigNumberish,
      depositAmount: BigNumberish,
      borrowAmount: BigNumberish,
      moneyPoolFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}