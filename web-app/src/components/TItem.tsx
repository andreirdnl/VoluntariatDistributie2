import { From } from './From'
import { To } from './To'
import { TItemDescription as TableItemDescription } from './TItemDescription'
  
  export const TItem: view = ({
    getDetails = observe.details[prop.itemIndex],
    setDetails = update.details[prop.itemIndex],
    item = observe.dataSet[prop.itemIndex],
    index = prop.itemIndex
  }) => {
    const {donator,recipient,donation} = item
    return (
      <div className="itemContainer">
        <div className="tableItem">
          <From donator={donator} donation={donation}/>
          <img src='' />
          <To recipient={recipient}/>
          <div className="when">
            <div className="whenTitle">Adaugat</div>
            <div className="whenValue">14 mai</div>
          </div>
          <div className="distance">
            <div className="distanceTitle">Abatere traseu</div>
            <div className="distanceValue">3 km</div>
          </div>
          <button className="moreDetails" onClick={()=>setDetails.set(!getDetails)}>Vezi Cursa</button>
        </div>
        {getDetails&& <TableItemDescription index={index}/>}
      </div>
    )
  };
  