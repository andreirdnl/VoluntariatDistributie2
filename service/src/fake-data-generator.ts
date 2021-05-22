import faker from "faker";
import _ from "lodash";

faker.seed(101);
faker.locale = "ro";

const result = _.range(10).map((index) => {
  // First name is not translated
  const name = faker.name.findName();
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ").slice(1).join(" ");

  return {
    name,
    email: faker.internet.email(firstName, lastName),
    phone: faker.phone.phoneNumber("07########"),
    streetAddress: faker.address.streetAddress().split(" ").reverse().join(" "),
    city: faker.address.cityName(),
    imageUrl: faker.image.people(400, 400),
  };
});

console.log(result);
