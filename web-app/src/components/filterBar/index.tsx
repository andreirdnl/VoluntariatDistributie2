type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const FilterBar: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return (
        <div data-ui="FilterBar" className="filter">
            Filtreaza dupa: 
            <button></button>
        </div>
    )
  };
  