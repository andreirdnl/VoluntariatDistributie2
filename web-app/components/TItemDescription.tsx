import { Donator } from './Donator'
import { Beneficiar } from './Beneficiar'
import { Donatie } from './Donatie'
  
  export const TItemDescription: view = ({
      finishedItem = update.finishedItem
  }) => {
    return (
      <div className="itemDescription">
        <div className="people">
          <Donator />
          <img src='' />
          <Beneficiar />
        </div>
        <Donatie />
        <button className="accept" onClick={()=>finishedItem.set('das')}>{`Accepta Cursa >`}</button>
      </div>
    )
  };
  