# contract-typechain

contract typechain for developing elysia dapp.

Do not need ABI file and to define any types of contract with this package!

Supported contracts

- StakingPool (StakingPool\_\_factory)
- MoneyPool (MoneyPool\_\_factory)
- IncentivePool (IncentivePool\_\_factory)
- ERC20 (ERC20\_\_factory)

and others are listed in src/factories

## Getting started

```
yarn add @elysia-dev/contract-typechain
```

## Example

### StakingPool with web3 libray in React

```
import React, { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { StakingPool__factory } from "@elysia-dev/contract-typechain";

const StakingModal: React.FunctionComponent = () => {
  const { account, library } = useWeb3React();
  const contract = useMemo(() => {
    return StakingPool__factory.connect(
      "0xDF409737E31475Ec46e13335Ad5370c551b97D12",
      library.getSigner()
    )
  }, [library])

  const stake = async (amount: BigNumber) => {
    const tx = await contract.stake(
      amount
    )

    /* tx is typed well
      interface TransactionResponse extends Transaction {
        hash: string;
        blockNumber?: number,
        blockHash?: string,
        timestamp?: number,
        confirmations: number,
        from: string;
        raw?: string,
        wait: (confirmations?: number) => Promise<TransactionReceipt>
      };
    */

    it(tx){
      console.log(tx.hash)
      /*
      tx.wait().then(() => {

      })
      */
    } else {
      console.log("Tx is not created")
    }
  }

  ...
  return (
    ...
  )
}
```

### Moneypool with web3 libray

Assume thats there is a singer instance(ether.js signer).

```
import { MoneyPool__factory } from "@elysia-dev/contract-typechain";

const signer = ... // this instance is created with provider & signer secret key

const contract = MoneyPool__factory.connect(
  "address",
  signer,
)

const deposit = async () => {

}


```

## Release
1. yarn build
2. yarn build:d
3. update pacakge version number
4. npm publish

