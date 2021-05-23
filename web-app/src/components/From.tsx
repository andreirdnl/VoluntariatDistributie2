  export const From: view = ({
    donator = prop.donator,
    donation = prop.donation
  }) => {
    return (
      <div className="donator">
        <div className="orasDonator">{donator.city}</div>
        <div className="detaliiDonator">
          <div className="imgDonatie">
            <img src={donation.images[0]} />
          </div>
          <div className="desc">{donation.description}</div>
          <div className="categorie">{donation.productType}</div>
          <div className="sizeType">{donation.sizeType}</div>
          <div className="weightType">{donation.weightType}</div>
        </div>
      </div>
    )
  };
  