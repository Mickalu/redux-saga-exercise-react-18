import { faker } from "@faker-js/faker";

export const createRandomBeer = () => (
  {
    id: faker.datatype.uuid(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    country: faker.address.county(),
    type_beer: faker.commerce.productAdjective(),
    company: faker.company.name(),
    colour: faker.color.human(),
    graduation: faker.random.numeric(1) + " %",
    size: faker.random.numeric(2) + " cl",
    price: faker.commerce.price(0, 50),
    photo_link: faker.image.imageUrl,
  }
);

export const listRandomBeers = (numberOfBeer) => {
  let BEERS = [];

  for(let i = 0; i < numberOfBeer; i++) {
    BEERS.push(createRandomBeer());
  };
  return BEERS;
};
