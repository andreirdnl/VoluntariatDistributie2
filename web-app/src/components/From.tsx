import style from './trip/style.module.css'

export const From: view = ({
  donator = prop.donator,
  donation = prop.donation
}) => {
  const greutati = ['1-5', '5-10', '10-30']
  return (
    <div data-ui="From" className={style.person} > 
      <h3>{donator.city}</h3>
      <div role="row">
        <div className={style.image}>
          <img src={donation.images[0]} />
        </div>
        <div role="cell">
          <h4>{donation.name}</h4>
          <p>
            Greutate: {greutati[donation.weightType]} kg
            <br/>
            Bucati: {donation.quantity}
          </p>
        </div>
      </div>
    </div>
  )
};
