import { LocationMap, Table, FilterBar, Navbar } from '../../components'
import { TripConfirmationView } from '../tripConfirmation'
import { initDataSet } from '../../../mock/genMock'
import style from './style.module.css'  
import banner from "../../assets/banner.png"
  
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
    <div > 
      <div className={style.hero}>
        <div className="wrapper">
          <Navbar />
          <h1>Curse disponibile</h1>
          <p>
            Ai masina si vrei sa faci o fapta buna?<br/>
            Ridica o donatie pe care sa o livrezi celor nevoiasi.
          </p>
          <FilterBar />
          <div className={style.banner}>
            <img src={banner} />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <Table data={getData}/>
      </div>
    </div>
  )
};
