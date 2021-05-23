  import { Donor } from '../components/Donor'
  import { Beneficiary } from '../components/Beneficiary'
  import { LocationMap } from '../components/LocationMap'
  
  export const TripConfirmationView: view = ({
    data = prop.item,
  }) => {
    return (
        <div className="multumim">
            <div className="mName">Multumim pentru ajutor</div>
            <div className="mDesc">iti multumit ca te-ai oferit sa transporti Calculator Pentium, de la Stefan Bulescu din Bucuresti, Valea cascadelor la Gradinita nr 32 in Urziceni, Aleea Invataturii</div>
            <div className="Card">In medie 60% din donatii gasesc un livrator</div>
            <div className="people">
                <Donor />
                <img src='' />
                <Beneficiary />
            </div>
            <LocationMap />
        </div>
    )
  };
  