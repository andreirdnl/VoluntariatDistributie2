import style from './trip/style.module.css'

export const To: view = ({
  recipient = prop.recipient,
}) => {
  console.log('recipient',recipient.neededProducts)
  return (
    <div data-ui="To" className={style.person} > 
      <h3>{recipient.city}, {recipient.streetAddress}</h3>
      <div role="row">
        <div className={style.avatar}>
          <img src={recipient.imageUrl} />
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
