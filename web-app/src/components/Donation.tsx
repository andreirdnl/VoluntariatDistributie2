  export const Donation: view = ({
    donation = prop.donation,
  }) => {
    const {name, description, sizeType, weightType, quantity, images, productType} = donation
    return (
        <>
            <div className="donatieTitle">Donatie</div>
            <div className="donatie">
                <div className="donatieDetails">
                    <div className="name">{name}</div>
                    <div className="dimension">{sizeType}</div>
                    <div className="weight">{weightType}</div>
                    <div className="pieces">{quantity}</div>
                </div>
                <div className="donationImages">
                  {images.length>0&&
                  images.map(i=><img src={i} />)}
                </div>
            </div>
        </>
    )
  };
  