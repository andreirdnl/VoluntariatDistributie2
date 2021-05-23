import { Beneficiary, Donor, Donation } from './'
  
  export const TItemDescription: view = ({
      finishedItem = update.finishedItem
  }) => {
    return (
      <div className="itemDescription">
        <div className="people">
          <Donor />
          <img src='' />
          <Beneficiary />
        </div>
        <Donation />
        <button className="accept" onClick={()=>finishedItem.set('das')}>{`Accepta Cursa >`}</button>
      </div>
    )
  };
  