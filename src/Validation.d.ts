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

interface ValidationInterface extends ethers.utils.Interface {
  functions: {
    "validateSettleAssetBond(tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "validateSettleAssetBond",
    values: [
      {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "validateSettleAssetBond",
    data: BytesLike
  ): Result;

  events: {};
}

export class Validation extends Contract {
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

  interface: ValidationInterface;

  functions: {
    validateSettleAssetBond(
      assetBond: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<[void]>;

    "validateSettleAssetBond((uint8,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,string,string))"(
      assetBond: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  validateSettleAssetBond(
    assetBond: {
      state: BigNumberish;
      borrower: string;
      signer: string;
      collateralServiceProvider: string;
      principal: BigNumberish;
      debtCeiling: BigNumberish;
      couponRate: BigNumberish;
      interestRate: BigNumberish;
      delinquencyRate: BigNumberish;
      loanStartTimestamp: BigNumberish;
      collateralizeTimestamp: BigNumberish;
      maturityTimestamp: BigNumberish;
      liquidationTimestamp: BigNumberish;
      ipfsHash: string;
      signerOpinionHash: string;
    },
    overrides?: CallOverrides
  ): Promise<void>;

  "validateSettleAssetBond((uint8,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,string,string))"(
    assetBond: {
      state: BigNumberish;
      borrower: string;
      signer: string;
      collateralServiceProvider: string;
      principal: BigNumberish;
      debtCeiling: BigNumberish;
      couponRate: BigNumberish;
      interestRate: BigNumberish;
      delinquencyRate: BigNumberish;
      loanStartTimestamp: BigNumberish;
      collateralizeTimestamp: BigNumberish;
      maturityTimestamp: BigNumberish;
      liquidationTimestamp: BigNumberish;
      ipfsHash: string;
      signerOpinionHash: string;
    },
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    validateSettleAssetBond(
      assetBond: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "validateSettleAssetBond((uint8,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,string,string))"(
      assetBond: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    validateSettleAssetBond(
      assetBond: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validateSettleAssetBond((uint8,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,string,string))"(
      assetBond: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    validateSettleAssetBond(
      assetBond: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validateSettleAssetBond((uint8,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,string,string))"(
      assetBond: {
        state: BigNumberish;
        borrower: string;
        signer: string;
        collateralServiceProvider: string;
        principal: BigNumberish;
        debtCeiling: BigNumberish;
        couponRate: BigNumberish;
        interestRate: BigNumberish;
        delinquencyRate: BigNumberish;
        loanStartTimestamp: BigNumberish;
        collateralizeTimestamp: BigNumberish;
        maturityTimestamp: BigNumberish;
        liquidationTimestamp: BigNumberish;
        ipfsHash: string;
        signerOpinionHash: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
