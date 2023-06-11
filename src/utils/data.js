import { faker, Faker, ru, pl, fr } from '@faker-js/faker';

const fakerRu = new Faker({ locale: ru });
const fakerPl = new Faker({ locale: pl });
const fakerFr = new Faker({ locale: fr });
const totalCount = 20;

const generateData = (seed, region, errorCount) => {
  const newData = [];
  fakerFr.seed(seed);
  fakerRu.seed(seed);
  fakerPl.seed(seed);

  for (let i = 0; i < totalCount; i++) {
    const id = generateId(region).substring(24);
    const name = generateName(region);
    const address = generateAddress(region);
    const phoneNumber = generatePhoneNumber(region);

    const errorRate = errorCount / 10;
    const errors = generateErrors(errorRate);

    const newDataItem = {
      id: applyErrors(id, errors),
      name: applyErrors(name, errors),
      address: applyErrors(address, errors),
      phoneNumber: applyErrors(phoneNumber, errors),
    };

    newData.push(newDataItem);
  }
  return newData;
};

const generateId = (region) => {
  switch (region) {
    case 'France':
      return fakerFr.string.uuid();
    case 'Poland':
      return fakerPl.string.uuid();
    case 'Russia':
      return fakerRu.string.uuid();
    default:
      return '';
  }
};

const generateName = (region) => {
  switch (region) {
    case 'France':
      return fakerFr.person.fullName();
    case 'Poland':
      return fakerPl.person.fullName();
    case 'Russia':
      return fakerRu.person.fullName();
    default:
      return '';
  }
};

const generateAddress = (region) => {
  switch (region) {
    case 'France':
      return fakerFr.location.streetAddress();
    case 'Poland':
      return fakerPl.location.streetAddress();
    case 'Russia':
      return fakerRu.location.streetAddress();
    default:
      return '';
  }
};

const generatePhoneNumber = (region) => {
  switch (region) {
    case 'France':
      return fakerFr.phone.number();
    case 'Poland':
      return fakerPl.phone.number();
    case 'Russia':
      return fakerRu.phone.number();
    default:
      return '';
  }
};

const generateErrors = (errorCount) => {
  faker.seed(seed);
  const errors = [];

  for (let i = 0; i < totalCount; i++) {
    if (i < errorCount) {
      const errorType = Math.floor(Math.random() * 3) + 1;
      errors.push(errorType);
    } else {
      errors.push(0);
    }
  }
  return errors;
};

const applyErrors = (data, errors) => {
  let modifiedData = data;

  errors.forEach((error, index) => {
    if (index < modifiedData.length) {
      switch (error) {
        case 1:
          modifiedData = removeRandomCharacter(modifiedData);
          break;
        case 2:
          modifiedData = addRandomCharacter(modifiedData);
          break;
        case 3:
          modifiedData = swapRandomCharacters(modifiedData);
          break;
        default:
          break;
      }
    }
  });
  return modifiedData;
};

const removeRandomCharacter = (data) => {
  const index = Math.floor(Math.random() * (data.length - 1));
  const newData =
    data.substring(0, index) + data.substring(index + 1, data.length);
  return newData;
};

const addRandomCharacter = (data) => {
  const index = Math.floor(Math.random() * (data.length - 1));
  const newCharacter = faker.string.alphanumeric();
  const newData =
    data.substring(0, index) + newCharacter + data.substring(index, data.length);
  return newData;
};

const swapRandomCharacters = (data) => {
  const index = Math.floor(Math.random() * (data.length - 2));
  const newData =
    data.substring(0, index) +
    data[index + 1] +
    data[index] +
    data.substring(index + 2, data.length);
  return newData;
};

export default generateData;
