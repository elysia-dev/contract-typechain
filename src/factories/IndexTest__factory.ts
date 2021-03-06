/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IndexTest, IndexTestInterface } from "../IndexTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getLTokenInterestIndex",
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
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getReserveData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "moneyPoolFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lTokenInterestIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowAPY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositAPY",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdateTimestamp",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "lTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "dTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "interestModelAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenizerAddress",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "id",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isActivated",
            type: "bool",
          },
        ],
        internalType: "struct DataStruct.ReserveData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "updateState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105a3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806335ea6a751461004657806374e8de771461006f578063cee4392314610084575b600080fd5b6100596100543660046103eb565b6100a5565b6040516100669190610437565b60405180910390f35b61008261007d3660046103eb565b6101c9565b005b6100976100923660046103eb565b6101ee565b604051908152602001610066565b6040805161018081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810191909152506001600160a01b03808216600090815260208181526040918290208251610180810184528154815260018201549281019290925260028101549282019290925260038201546060820152600482015460808201526005820154831660a08201526006820154831660c08201526007820154831660e082015260089091015491821661010082015260ff600160a01b83048116610120830152600160a81b830481161515610140830152600160b01b90920490911615156101608201525b919050565b6001600160a01b03811660009081526020819052604090206101eb9082610290565b50565b6001600160a01b0381166000908152602081905260408082209051635ed8914160e01b8152600481019190915273__$b2803e6fc9c1907245baf73f249fd756da$__90635ed891419060240160206040518083038186803b15801561025257600080fd5b505af4158015610266573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028a9190610412565b92915050565b60038201546102a457426004830155610307565b6102ad8261030b565b6001830181905542600484018190556040516001600160a01b038416927f9a1b7c42fa344b6eab391c9dce3f027cd74830d4e906c023ad432a8cb06e4f87926102fe92918252602082015260400190565b60405180910390a25b5050565b60048101546000904281141561032757505060018101546101c4565b600061034684600101546103408660030154854261034e565b90610395565b949350505050565b60008061035b8484610540565b9050676765c793fa10079d601b1b6301e133806103788388610521565b6103829190610501565b61038c91906104e9565b95945050505050565b60008215806103a2575081155b156103af5750600061028a565b676765c793fa10079d601b1b6103c6600282610501565b6103d08486610521565b6103da91906104e9565b6103e49190610501565b9392505050565b6000602082840312156103fc578081fd5b81356001600160a01b03811681146103e4578182fd5b600060208284031215610423578081fd5b5051919050565b6001600160a01b03169052565b600061018082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015161047e60a084018261042a565b5060c083015161049160c084018261042a565b5060e08301516104a460e084018261042a565b50610100808401516104b88285018261042a565b50506101208381015160ff169083015261014080840151151590830152610160928301511515929091019190915290565b600082198211156104fc576104fc610557565b500190565b60008261051c57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561053b5761053b610557565b500290565b60008282101561055257610552610557565b500390565b634e487b7160e01b600052601160045260246000fdfea26469706673582212209310395082ef52e55939e016f8a6afb58c3bf9068a1591103cd8b90f93adc7fe64736f6c63430008030033";

type IndexTestConstructorParams =
  | [linkLibraryAddresses: IndexTestLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IndexTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class IndexTest__factory extends ContractFactory {
  constructor(...args: IndexTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        IndexTest__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(linkLibraryAddresses: IndexTestLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b2803e6fc9c1907245baf73f249fd756da\\$__", "g"),
      linkLibraryAddresses["contracts/logic/Index.sol:Index"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IndexTest> {
    return super.deploy(overrides || {}) as Promise<IndexTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IndexTest {
    return super.attach(address) as IndexTest;
  }
  connect(signer: Signer): IndexTest__factory {
    return super.connect(signer) as IndexTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IndexTestInterface {
    return new utils.Interface(_abi) as IndexTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IndexTest {
    return new Contract(address, _abi, signerOrProvider) as IndexTest;
  }
}

export interface IndexTestLibraryAddresses {
  ["contracts/logic/Index.sol:Index"]: string;
}
