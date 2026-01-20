import { faker } from '@faker-js/faker';

export const buildStudent = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
  phone: faker.string.numeric(10),
  birth: { year: '1995', month: 'May', day: '15' },
  subject: faker.helpers.arrayElement(['Maths', 'English', 'Computer Science']),
  hobby: faker.helpers.arrayElement(['Sports', 'Reading', 'Music']),
  address: faker.location.streetAddress(),
  state: 'NCR',
  city: 'Delhi',
});
