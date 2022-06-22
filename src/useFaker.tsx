import { faker } from '@faker-js/faker';

export function useFaker() {
  return {
    address: faker?.address,
    animal: faker?.animal,
    color: faker?.color,
    commerce: faker?.commerce,
    company: faker?.company,
    database: faker?.database,
  };
}
