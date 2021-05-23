import _ from "lodash";
import donations from "../resources/donations.json";
import donors from "../resources/donors.json";
import beneficiaries from "../resources/beneficiaries.json";
import trips from "../resources/trips.json";

const result = _.range(10).map((index) => {
  return {
    donor: donors[index],
    beneficiary: beneficiaries[index],
    donation: donations[index],
    trip: { ...trips[index], mapsImageUrl: `/trips/${index}.png` },
  };
});

export const tripsData = result;
