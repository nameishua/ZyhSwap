import { simpleRpcProvider } from '@/utils/provider';
import zyhFactoryAbi from '@/config/abi/zyhFactory.json';
import zyhRouterAbi from '@/config/abi/zyhRouter.json';
import zyhPairAbi from '@/config/abi/zyhPair.json';
import wethAbi from '@/config/abi/weth.json';

import erc20Abi from '@/config/abi/erc20.json';

import { getzyhFactoryAddress, getzyhRouterAddress, getWethAddress } from '@/utils/addressHelp';

const getContract = (abi, address, provider) => {
  let signerOrProvider = provider != undefined ? provider : simpleRpcProvider;
  return new signerOrProvider.eth.Contract(abi, address);
};

export const getErc20Contract = (address, provider) => {
  return getContract(erc20Abi, address, provider);
};

export const getzyhRouterContract = provider => {
  return getContract(zyhRouterAbi, getzyhRouterAddress(), provider);
};

export const getzyhFactoryContract = provider => {
  return getContract(zyhFactoryAbi, getzyhFactoryAddress(), provider);
};

export const getzyhPairContract = (address, provider) => {
  return getContract(zyhPairAbi, address, provider);
};

export const getWethContract = provider => {
  console.log(getWethAddress(), 'getWethAddress()');
  return getContract(wethAbi, getWethAddress(), provider);
};
