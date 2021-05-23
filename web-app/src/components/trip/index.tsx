import { From, To } from '../'
import { TripDetails } from '../tripDetails'
import style from './style.module.css'
import style2 from '../../styles/button.module.css'
  
export const Trip: view = ({
  getDetails = observe.details[prop.itemIndex],
  setDetails = update.details[prop.itemIndex],
  item = observe.dataSet[prop.itemIndex],
  index = prop.itemIndex
}) => {
  const {donor,beneficiary,donation, trip} = item
  console.log('tralala',item)
  if(getDetails == undefined)
    setDetails.set(false)
  return (
    <div data-ui="Trip" aria-expanded={getDetails}  className={style.trip} >
      <div className={style.summary} >
        <From donator={donor} donation={donation}/>
        <To recipient={beneficiary}/>
        <div role="row" className={style.props}>
          <div className={style.date}>{donation.createdAt}</div>
          <div className={style.sidetrack}>{trip.distanceFromRoute}</div>
          <div role="cell">
            { getDetails 
              ? <button className={style2.outline} onClick={()=>setDetails.set(false)}>Inchide</button>
              : <button className={style2.button} onClick={()=>setDetails.set(true)}>Detalii</button>
            }
          </div>
        </div>
      </div>
      {getDetails && <TripDetails index={index}/>}
    </div>
  )
};
