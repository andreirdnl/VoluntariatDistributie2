import map from "../assets/map.png"

type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const LocationMap: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return (
        <img src={map} />
    )
  };
  