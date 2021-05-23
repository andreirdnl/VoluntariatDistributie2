import style from './trip/style.module.css'
import placeholder from "../assets/profile-placeholder.png"

export const To: view = ({
  recipient = prop.recipient,
}) => {
  return (
    <div data-ui="To" className={style.person} > 
      <h3>{recipient.city}, {recipient.streetAddress}</h3>
      <div role="row">
        <div className={style.avatar}>
          { recipient.imageUrl && <img src={recipient.imageUrl} /> }
          { !recipient.imageUrl && <img src={placeholder} /> }
        </div>
        <div role="cell">
          <h4>{recipient.name}</h4>
          <div>
            Adaugat de: <a href="">{recipient.ngoName}</a>
            <br/>
            Nevoi:&nbsp;
            <ul className={style.needs}>
              {recipient.neededProducts && recipient.neededProducts.length > 0 && recipient.neededProducts.map( (need, index) => <li key={"needs" + index}>{need}</li> )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
