import { Donor } from '../../components/Donor'
import { Beneficiary } from '../../components/Beneficiary'
import { LocationMap } from '../../components/LocationMap'
import style from './style.module.css'  
import { ReactComponent as SVGChevron } from '../../assets/chevron.svg' 

export const TripConfirmationView: view = ({
  data = observe.finishedItem,
}) => {
  console.log(data)
  const {donor, beneficiary, donation, trip} = data
  const {name, city, streetAddress} = donor
  return (
    <div className={style.confirmation}>
      <div className="wrapper">
        <h1>Multumim pentru ajutor</h1>
        <p className={style.summary}>
          Iti multumim ca te-ai oferit sa transporti <b>{donation.name}</b>, 
          de la <b>{name}</b> din <b>{city}</b>, <b>{streetAddress}</b>&nbsp;
          pana la <b>{beneficiary.name}</b> din <b>{beneficiary.city}</b>, <b>{beneficiary.streetAddress}</b>
        </p>
        <div className={style.people}>
          <Donor donator={donor}/>
          <SVGChevron />
          <Beneficiary beneficiar={beneficiary}/>
        </div>
        {/* <div className={style.facts}>
          <small>Stiai ca</small>
          In medie 60% din donatii gasesc un livrator
        </div> */}
        <div className={style.map}>
          <LocationMap trip={trip}/>
        </div>
      </div>
    </div>
  )
};
