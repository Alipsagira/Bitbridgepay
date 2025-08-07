import { openContractCall} from '@stacks/connect';
import { standardPrincipalCV, uintCV} from '@stacks/transactions';
import { StacksTestnet} from '@stacks/network';

export async function sendSbtc(amount, recipient) {
  await openContractCall({
    contractAddress: 'ST000000000000000000002AMW42H',
    contractName: 'sbTC',
    functionName: 'transfer',
    functionArgs: [uintCV(amount), standardPrincipalCV(recipient)],
    network: new StacksTestnet(),
    appDetails: {
      name: 'BitBridge Pay',
      icon: 'https://your-frontend.com/icon.png',
},
});
}


