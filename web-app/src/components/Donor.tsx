    export const Donor: view = ({
    donator = prop.donator,
  }) => {
    const {name, email, phone, streetAddress, imageUrl} = donator
    return (
      <>
        <div className="donatorTitle">Donator</div>
        <div className="donator">
            <div className="avatar">
                <img src={imageUrl} />
            </div>
            <div className="donatorDetails">
                <div className="name">{name}</div>
                <div className="email">{email}</div>
                <div className="phone">{phone}</div>
                <div className="address">{streetAddress}</div>
            </div>
        </div>
      </>
    )
  };
  