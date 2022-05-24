import store from '@/store';

import { getErc20Contract, getzyhRouterContract, getzyhFactoryContract, getWethContract } from '@/utils/contractHelp';
export const useErc20Contract = address => {
  const { provider } = store.state;

  return getErc20Contract(address, provider);
};

export const usezyhRouterContract = () => {
  const { provider } = store.state;

  return getzyhRouterContract(provider);
};

export const usezyhFactoryContract = () => {
  const { provider } = store.state;

  return getzyhFactoryContract(provider);
};

export const useWethContract = () => {
  const { provider } = store.state;

  return getWethContract(provider);
};
