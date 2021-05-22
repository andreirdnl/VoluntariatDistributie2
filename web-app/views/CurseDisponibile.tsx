import { Table } from '../components/Table'
import { LocationMap } from '../components/LocationMap'

type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const CurseDisponibileView: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return (
      <div>
        <div className="pageTitle">Curse Disponibile</div>
        <div className="pageTitleInfo">Urmatoarele curse sunt disponibile pentru a livra donatii</div>
        <div className="container">
          <Table />
          <LocationMap />
        </div>
      </div>
    )
  };
  