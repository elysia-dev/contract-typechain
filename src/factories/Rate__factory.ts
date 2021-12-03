/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Rate, RateInterface } from "../Rate";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "underlyingAssetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lTokenIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAPY",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAPY",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBorrow",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalDeposit",
        type: "uint256",
      },
    ],
    name: "RatesUpdated",
    type: "event",
  },
];

const _bytecode =
  "0x61045f61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80636f6f4e0f1461003a575b600080fd5b81801561004657600080fd5b5061005a61005536600461033f565b61005c565b005b61008e6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b8460060160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156100de57600080fd5b505afa1580156100f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101169190610386565b815260068501546040805163586a7e2d60e11b815290516001600160a01b039092169163b0d4fc5a91600480820192602092909190829003018186803b15801561015f57600080fd5b505afa158015610173573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101979190610386565b606082015260058501546040516370a0823160e01b81526001600160a01b0391821660048201526000918616906370a082319060240160206040518083038186803b1580156101e557600080fd5b505afa1580156101f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021d9190610386565b6007870154835188546040516309d10c5360e01b81529394506001600160a01b03909216926309d10c539261025d92869290918a918a91906004016103c1565b604080518083038186803b15801561027457600080fd5b505afa158015610288573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ac919061039e565b60408401819052602084018290526002880182905560038801819055600188015484516001600160a01b038916937f12730b550088874334647afee55213dd47e6078962e7a9665ecf35b177c57855939091808961030a8c8a6103e4565b61031491906103fc565b61031e91906103e4565b60405161032f9594939291906103c1565b60405180910390a2505050505050565b60008060008060808587031215610354578384fd5b8435935060208501356001600160a01b0381168114610371578384fd5b93969395505050506040820135916060013590565b600060208284031215610397578081fd5b5051919050565b600080604083850312156103b0578182fd5b505080516020909101519092909150565b948552602085019390935260408401919091526060830152608082015260a00190565b600082198211156103f7576103f7610413565b500190565b60008282101561040e5761040e610413565b500390565b634e487b7160e01b600052601160045260246000fdfea26469706673582212205f503be939aab91b214a747db75a24ac8a4dec65f346618b25cf97f43c6070a764736f6c63430008030033";

type RateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Rate__factory extends ContractFactory {
  constructor(...args: RateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Rate> {
    return super.deploy(overrides || {}) as Promise<Rate>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Rate {
    return super.attach(address) as Rate;
  }
  connect(signer: Signer): Rate__factory {
    return super.connect(signer) as Rate__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RateInterface {
    return new utils.Interface(_abi) as RateInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Rate {
    return new Contract(address, _abi, signerOrProvider) as Rate;
  }
}
