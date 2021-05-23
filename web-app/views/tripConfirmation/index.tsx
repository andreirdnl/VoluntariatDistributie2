  import { Donor } from '../../src/components/Donor'
  import { Beneficiary } from '../../src/components/Beneficiary'
  import { LocationMap } from '../../src/components/LocationMap'
  
  export const TripConfirmationView: view = ({
    data = observe.finishedItem,
  }) => {
    console.log(data)
    const {donator, recipient, donation} = data
    const {name, city, streetAddress} = donator
    const thankYouMessage = 
    `iti multumim ca te-ai oferit sa transporti ${donation.name}, de la ${name} din ${city}, ${streetAddress}`
    return (
        <div className="multumim">
            <div className="mName">Multumim pentru ajutor</div>
            <div className="mDesc">{thankYouMessage}</div>
            <div className="Card">In medie 60% din donatii gasesc un livrator</div>
            <div className="people">
                <Donor donator={donator}/>
                <img src='' />
                <Beneficiary beneficiar={recipient}/>
            </div>
            <LocationMap />
        </div>
    )
  };
  