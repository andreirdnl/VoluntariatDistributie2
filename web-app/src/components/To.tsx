  export const To: view = ({
    recipient = prop.recipient,
  }) => {
    return (
      <div className="recipient">
        <div className="adrRecipient">{recipient.streetAddress}</div>
        <div className="detaliiRecipient">
          <div className="imgRecipient">
            <img src={recipient.imageUrl} />
          </div>
          <div className="nameRecipient">{recipient.name}</div>
          <div className="ongName">{`ONG: ${recipient.ngoName}`}</div>
          <div className="nevoi">{`Nevoi: ${recipient.neededProducts.map(
            need => need
          )}`}</div>
        </div>
      </div>
    )
  };
  