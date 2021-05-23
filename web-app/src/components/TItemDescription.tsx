import { Beneficiary, Donor, Donation } from '.'
  
  export const TItemDescription: view = ({
      finishedItem = update.finishedItem,
      data = observe.dataSet[prop.index]
  }) => {
    const {donator,recipient,donation} = data
    return (
      <div className="itemDescription">
        <div className="people">
          <Donor donator={donator}/>
          <img src='' />
          <Beneficiary beneficiar={recipient}/>
        </div>
        <Donation donation={donation}/>
        <button className="accept" onClick={()=>finishedItem.set(data)}>{`Accepta Cursa >`}</button>
      </div>
    )
  };
  