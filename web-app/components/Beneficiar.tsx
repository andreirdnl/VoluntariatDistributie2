type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const Beneficiar: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return <div>Beneficiar</div>;
  };
  