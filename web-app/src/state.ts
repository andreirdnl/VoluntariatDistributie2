export type State = {
  name: string;
  greeting: string;
  item: {
    [k: string]: string;
  };
  details: []
  finishedItem: {}
  dataSet: []
  filterBar: {}
  dateSort: string
  distanceSort: string
};
