import { LocationMap, Table, Navbar } from '../components'
import { TripConfirmationView } from './TripConfirmation'
import { initDataSet } from '../mock/genMock'
  
  export const TripsView: view = ({
    finishedItem = observe.finishedItem,
    setData = update.dataSet,
    getData = observe.dataSet
  }) => {
    if(!getData){
      setData.set(initDataSet())
      return null
    }
    return (
      finishedItem ? <TripConfirmationView item = {finishedItem}/> :
      <div>
        <Navbar />
        <div className="pageTitle">Curse Disponibile</div>
        <div className="pageTitleInfo">Urmatoarele curse sunt disponibile pentru a livra donatii</div>
        <div className="container">
          <Table data={getData}/>
          <LocationMap />
        </div>
      </div>
    )
  };
  