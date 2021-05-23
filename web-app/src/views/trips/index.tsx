import { LocationMap, Table, FilterBar, Navbar } from '../../components'
import { TripConfirmationView } from '../tripConfirmation'
import { initDataSet } from '../../../mock/genMock'
import style from './style.module.css'  
import banner from "../../assets/banner.png"
import axios from 'axios';
  
export const TripsView: view = ({
  finishedItem = observe.finishedItem,
  setData = update.dataSet,
  getData = observe.dataSet
}) => {
  axios.get(`http://localhost:3000/api/trips`)
      .then(res => {
        setData.set(res.data)
      })
  if(!getData){
    //setData.set(initDataSet())
    return null
  }
  return (
    finishedItem ? <TripConfirmationView item = {finishedItem}/> :
    <div > 
      <div data-ui="TripConfirmationView" className={style.hero}>
        <div className="wrapper">
          <Navbar />
          <h1>Curse disponibile</h1>
          <p>
            Ai masina si vrei sa faci o fapta buna?<br/>
            Ridica o donatie pe care sa o livrezi celor nevoiasi.
          </p>
          <div className={style.banner}>
            <img src={banner} />
          </div>
          <FilterBar />
        </div>
      </div>
      <div className="wrapper">
        <Table />
      </div>
    </div>
  )
};
