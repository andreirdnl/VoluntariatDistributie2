import { From } from './From'
import { To } from './To'

type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const TItem: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return (
      <div className='tableItem'>
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
        <button className="moreDetails">Vezi Cursa</button>
      </div>
    )
  };
  