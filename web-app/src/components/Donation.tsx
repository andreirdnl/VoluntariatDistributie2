import style from './tripDetails/style.module.css'

export const Donation: view = ({
  donation = prop.donation,
}) => {
  const {name, description, sizeType, weightType, quantity, images, productType} = donation
  const weights = ['1-5', '5-10', '10-30']
  const sizes = ['incape intr-o cutie (40x40x40 cm)', 'incape intr-un portbagaj', 'incape intr-o duba']
  return (
    <div data-ui="Donation" className={style.donation}>
      <h2>Donatie</h2>
      <h3>{name}</h3>
      <div className={style['donation-details']}>
        Dimensiuni: {sizes[sizeType]}<br/>
        Greutate: {weights[weightType]} kg<br/>
        Bucati: {quantity}
      </div>
      <div className={style.description}>
        {description}
      </div>
      <div className={style.images}>
        {images.length>0 &&
        images.map((i, index)=><a href={i} target="_blank" className={style.image} key={'thumb' + index}><img src={i} /></a>)}
      </div>
    </div>
  )
};
