type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const Donatie: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return <div>Donatie</div>;
  };
  