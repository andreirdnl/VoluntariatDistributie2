type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const From: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return <div>From</div>;
  };
  