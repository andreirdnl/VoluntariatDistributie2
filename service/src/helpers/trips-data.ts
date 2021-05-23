import _ from "lodash";
import donations from "../resources/donations.json";
import donors from "../resources/donors.json";
import beneficiaries from "../resources/beneficiaries.json";
import trips from "../resources/trips.json";

const result = _.range(10).map((index) => {
  const obj = {
    donor: donors[index],
    beneficiary: beneficiaries[index],
    donation: donations[index],
    trip: {
      ...trips[index],
      mapsImageUrl: `http://localhost:3000/trips/${index}.png`,
    },
  };
  if (index < 5) {
    // @ts-ignore
    obj.donor.imageUrl = `http://localhost:3000/donors/${index}.jpg`;
  }

  if (index % 2 === 0) {
    // @ts-ignore
    obj.beneficiary.imageUrl = `http://localhost:3000/beneficiaries/${
      index / 2
    }.jpg`;
  }

  return obj;
});

export const tripsData = result;
