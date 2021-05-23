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
        <div className="locationMap">
            <div className="title">Harta Curse</div>
            <img className="map" src='https://picsum.photos/500/300'></img>
        </div>
    )
  };
  