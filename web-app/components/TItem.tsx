import { From } from './From'
import { To } from './To'
import { TItemDescription as TableItemDescription } from './TItemDescription'
  
  export const TItem: view = ({
    getDetails = observe.details,
    setDetails = update.details,
  }) => {
    return (
      <div className="itemContainer">
        <div className="tableItem">
          <From />
          <img src='' />
          <To />
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
        {getDetails&& <TableItemDescription />}
      </div>
    )
  };
  