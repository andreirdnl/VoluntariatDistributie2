import { Beneficiary, Donor, Donation, LocationMap } from '..'
import style from './style.module.css' 
import style2 from '../../styles/button.module.css'

  
  export const TripDetails: view = ({
      finishedItem = update.finishedItem,
      data = observe.dataSet[prop.index]
  }) => {
    const {donor,beneficiary,donation, trip} = data
    return (
      <div data-ui="TripDetails" className={style.details}>
        <div role="row">
          <div role="cell" className={style.col1}>
            <Donor donator={donor}/>
            <Beneficiary beneficiar={beneficiary}/>
          </div>
          <div role="cell" className={style.col2}>
            <Donation donation={donation}/>
          </div>
          <div role="cell" className={style.col3}>
            <LocationMap trip={trip}/>
          </div>
        </div>
        <div className={style['button-wrapper']}>
          <button className={style.button + ' ' + style2.button} onClick={()=>finishedItem.set(data)}>
            Accepta Cursa
          </button>
        </div>
      </div>
    )
  };
  