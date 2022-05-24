import store from '@/store';
import { getzyhFactoryContract, getErc20Contract } from '@/utils/contractHelp';

export const useErc20 = address => {
  const { provider } = store.state;
  return getErc20Contract(address, provider);
};

export const usezyhFactory = () => {
  const { provider } = store.state;
  return getzyhFactoryContract(provider);
};
