import _ from "lodash";
import donations from "../resources/donations.json";
import donators from "../resources/donators.json";
import recipients from "../resources/recipients.json";

const result = _.range(10).map((index) => {
  return {
    donator: donators[index],
    recipient: recipients[index],
    donation: donations[index],
  };
});

export const tripsData = result;
