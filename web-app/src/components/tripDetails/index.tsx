import { Beneficiary, Donor, Donation, LocationMap } from '..'
import style from './style.module.css' 

  
  export const TripDetails: view = ({
      finishedItem = update.finishedItem,
      data = observe.dataSet[prop.index]
  }) => {
    const {donator,recipient,donation} = data
    return (
      <div data-ui="TripDetails" className={style.details}>
        <div role="row">
          <div role="cell" className={style.col1}>
            <Donor donator={donator}/>
            <Beneficiary beneficiar={recipient}/>
          </div>
          <div role="cell" className={style.col2}>
            <Donation donation={donation}/>
          </div>
          <div role="cell" className={style.col3}>
            <LocationMap/>
          </div>
        </div>
        <button className="accept" onClick={()=>finishedItem.set(data)}>{`Accepta Cursa >`}</button>
      </div>
    )
  };
  