import { From } from './From'
import { To } from './To'
import { Donator } from './Donator'
import { Beneficiar } from './Beneficiar'
import { Donatie } from './Donatie'
  
  export const TItemDescription: view = ({}) => {
    return (
      <div className="itemDescription">
        <div className="people">
          <Donator />
          <img src='' />
          <Beneficiar />
        </div>
        <Donatie />
        <button className="accept">{`Accepta Cursa >`}</button>
      </div>
    )
  };
  