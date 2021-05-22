import { Table } from '../components/Table'
import { LocationMap } from '../components/LocationMap'
import { Multumim } from './Multumim'
  
  export const CurseDisponibileView: view = ({
    finishedItem = observe.finishedItem,
  }) => {
    return (
      finishedItem ? <Multumim item = {finishedItem}/> :
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
  