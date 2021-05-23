import _ from "lodash";
import donations from "../resources/donations.json";
import donors from "../resources/donors.json";
import beneficiaries from "../resources/beneficiaries.json";

const result = _.range(10).map((index) => {
  return {
    donor: donors[index],
    beneficiary: beneficiaries[index],
    donation: donations[index],
  };
});

export const tripsData = result;
