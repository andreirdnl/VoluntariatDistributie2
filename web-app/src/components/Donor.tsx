import style from './tripDetails/style.module.css'
import { ReactComponent as SVGEmail } from '../assets/email.svg' 
import { ReactComponent as SVGPin } from '../assets/pin.svg' 
import { ReactComponent as SVGPhone } from '../assets/phone.svg' 
import { ReactComponent as SVGNGO } from '../assets/ngo.svg' 

export const Donor: view = ({
  donator = prop.donator,
}) => {
  const {name, email, phone, city, ngoName, streetAddress, imageUrl} = donator
  return (
    <div data-ui="Donor" className={style.person}>
      <div className={style.avatar}>
        <img src={imageUrl} />
      </div>
      <h2>Donator</h2>
      <h3>{name}</h3>
      <ul className={style.contact}>
        <li key="email">
          <div className={style.icon}><SVGEmail/></div>
          {email}
        </li>
        <li key="phone" >
          <div className={style.icon}><SVGPhone/></div>
          {phone}
        </li>
        <li key="address">
          <div className={style.icon}><SVGPin/></div>
          {city}, {streetAddress}
        </li>
        {ngoName && <li key="ong" className="ong"><div className={style.icon}><SVGNGO/></div>{`ONG: ${ngoName}`}</li>}
      </ul>
    </div>
  )
};
