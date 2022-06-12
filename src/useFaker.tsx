import { faker } from '@faker-js/faker';

export function useFaker() {
  return {
    address: faker?.address,
  };
}
