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

interface TimeConverterInterface extends ethers.utils.Interface {
  functions: {
    "parseTimestamp(uint256)": FunctionFragment;
    "toTimestamp(uint16,uint8,uint8,uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "parseTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toTimestamp",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "parseTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toTimestamp",
    data: BytesLike
  ): Result;

  events: {};
}

export class TimeConverter extends Contract {
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

  interface: TimeConverterInterface;

  functions: {
    parseTimestamp(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [number, number, number, number, number, number, number] & {
          year: number;
          month: number;
          day: number;
          hour: number;
          minute: number;
          second: number;
          weekday: number;
        }
      ] & {
        dateTime: [number, number, number, number, number, number, number] & {
          year: number;
          month: number;
          day: number;
          hour: number;
          minute: number;
          second: number;
          weekday: number;
        };
      }
    >;

    "parseTimestamp(uint256)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [number, number, number, number, number, number, number] & {
          year: number;
          month: number;
          day: number;
          hour: number;
          minute: number;
          second: number;
          weekday: number;
        }
      ] & {
        dateTime: [number, number, number, number, number, number, number] & {
          year: number;
          month: number;
          day: number;
          hour: number;
          minute: number;
          second: number;
          weekday: number;
        };
      }
    >;

    "toTimestamp(uint16,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    "toTimestamp(uint16,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      second: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;
  };

  parseTimestamp(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number, number, number] & {
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      second: number;
      weekday: number;
    }
  >;

  "parseTimestamp(uint256)"(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number, number, number] & {
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      second: number;
      weekday: number;
    }
  >;

  "toTimestamp(uint16,uint8,uint8,uint8)"(
    year: BigNumberish,
    month: BigNumberish,
    day: BigNumberish,
    hour: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "toTimestamp(uint16,uint8,uint8)"(
    year: BigNumberish,
    month: BigNumberish,
    day: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"(
    year: BigNumberish,
    month: BigNumberish,
    day: BigNumberish,
    hour: BigNumberish,
    minute: BigNumberish,
    second: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    parseTimestamp(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, number, number] & {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        weekday: number;
      }
    >;

    "parseTimestamp(uint256)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number, number, number] & {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        weekday: number;
      }
    >;

    "toTimestamp(uint16,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      second: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    parseTimestamp(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "parseTimestamp(uint256)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      second: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    parseTimestamp(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "parseTimestamp(uint256)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toTimestamp(uint16,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toTimestamp(uint16,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      second: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}