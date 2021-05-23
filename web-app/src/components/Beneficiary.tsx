import style from './tripDetails/style.module.css'
import { ReactComponent as SVGEmail } from '../assets/email.svg' 
import { ReactComponent as SVGPin } from '../assets/pin.svg' 
import { ReactComponent as SVGPhone } from '../assets/phone.svg' 
import { ReactComponent as SVGNGO } from '../assets/ngo.svg' 
import placeholder from "../assets/profile-placeholder.png"

export const Beneficiary: view = ({
  beneficiar = prop.beneficiar
}) => {
  const {name, email, phone, city, streetAddress, ngoName, neededProducts, imageUrl} = beneficiar
  return (
    <div data-ui="Beneficiary" className={style.person  + ' ' + style.beneficiary}>
      <div className={style.avatar}>
        { imageUrl && <img src={imageUrl} /> }
        { !imageUrl && <img src={placeholder} /> }
      </div>
      <h2>Beneficiar</h2>
      <h3>{name}</h3>
      <ul className={style.contact}>
        <li key="email">
          <div className={style.icon}><SVGEmail/></div>
          {email}
        </li>
        <li key="phone">
          <div className={style.icon}><SVGPhone/></div>
          {phone}
        </li>
        <li key="address">
          <div className={style.icon}><SVGPin/></div>
          {city}, {streetAddress}
        </li>
        {ngoName && <li key="ong"><div className={style.icon}><SVGNGO/></div>{`ONG responsabil: ${ngoName}`}</li>}
      </ul>
    </div>
  );
};
