  export const Beneficiary: view = ({
    beneficiar = prop.beneficiar
  }) => {
    const {name, email, phone, streetAddress, ngoName, neededProducts, imageUrl} = beneficiar
    return (
      <>
        <div className="beneficiarTitle">Beneficiar</div>
        <div className="beneficiar">
            <div className="avatar">
                <img src={imageUrl} />
            </div>
            <div className="beneficiarDetails">
                <div className="name">{name}</div>
                <div className="email">{email}</div>
                <div className="phone">{phone}</div>
                <div className="address">{streetAddress}</div>
                <div className="ong">{`ONG: ${ngoName}`}</div>
                <div className="nevoi">{`nevoi: ${neededProducts.map(need=>need)}`}</div>
            </div>
        </div>
      </>
    );
  };
  