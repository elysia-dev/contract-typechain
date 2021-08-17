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
yarn install @elysia-dev/contract-typechain
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
    return StakingPool__factory.connect("0xDF409737E31475Ec46e13335Ad5370c551b97D12", library as any)
  }, [library])

  const stake = async (amount: BigNumber) => {
    const { to, data } = await this.contract?.populateTransaction.stake(amount);
      try {
        const txHash = await this.request({
          method: 'eth_sendTransaction',
          params: [
            {
              to,
              from: account,
              data,
            },
          ],
      })

      return txHash;
    } catch (e) {
      console.log(e);
      return
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
  const contractResponse = await contract.deposit(
    asset, account, amount
  )

  /* contractResponse is typed well
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
}

```
