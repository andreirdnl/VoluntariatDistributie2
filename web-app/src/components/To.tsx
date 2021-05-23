import style from './trip/style.module.css'

export const To: view = ({
  recipient = prop.recipient,
}) => {
  return (
    <div data-ui="To" className={style.person} > 
      <h3>{recipient.streetAddress}</h3>
      <div role="row">
        <div className={style.avatar}>
          <img src={recipient.imageUrl} />
        </div>
        <div role="cell">
          <h4>{recipient.name}</h4>
          <p>
            Adaugat de: <a href="">{recipient.ngoName}</a>
            <br/>
            Nevoi:&nbsp;
            <ul className={style.needs}>
              {recipient.neededProducts.map( need => <li>{need}</li> )}
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
};
