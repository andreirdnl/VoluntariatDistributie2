import { LocationMap, Table, Navbar } from '../components'
import { TripConfirmationView } from './TripConfirmation'
  
  export const TripsView: view = ({
    finishedItem = observe.finishedItem,
  }) => {
    return (
      finishedItem ? <TripConfirmationView item = {finishedItem}/> :
      <div>
        <Navbar />
        <div className="pageTitle">Curse Disponibile</div>
        <div className="pageTitleInfo">Urmatoarele curse sunt disponibile pentru a livra donatii</div>
        <div className="container">
          <Table />
          <LocationMap />
        </div>
      </div>
    )
  };
  