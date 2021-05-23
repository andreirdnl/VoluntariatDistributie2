import { LocationMap, Table, Navbar } from '../../components'
import { TripConfirmationView } from '../tripConfirmation'
import { initDataSet } from '../../../mock/genMock'
import style from './style.module.css'  
  
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
    <div className={style.wrapper}> 
      <Navbar />
      <div className={style.hero}>
        <h1>Curse disponibile</h1>
        <p>
          Ai masina si vrei sa faci o fapta buna?<br/>
          Ridica o donatie pe care sa o livrezi celor nevoiasi.
        </p>
      </div>
      <Table data={getData}/>
    </div>
  )
};
