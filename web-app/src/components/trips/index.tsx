
import { Trip } from '../'
import { ReactComponent as SVGArrow } from '../../assets/arrow.svg' 
import style from './style.module.css' 

export const Table: view = ({
  dataSet = observe.dataSet,
  filterOptions = observe.filterBar
}) => {
  const {option0, option1, option2} = filterOptions
  const opArr = [option0, option1, option2]
  const filterData = dataSet.filter(f=>opArr[f.donation.sizeType])
  return (
    <>
      <ul data-ui="Trips--List" className={style.header}>
          <li className={style.col1}>Donator</li>
          <li className={style.col2}>Beneficiar</li>
          <li className={style.col3}>
            Adaugat <SVGArrow />
          </li>
          <li className={style.col4}>
            Abatere traseu
          </li>
      </ul>
      <div data-ui="Trips--List" className={style.trips}>
        {
          filterData.map(i=>
          <Trip 
            key={dataSet.indexOf(i)} 
            itemIndex={dataSet.indexOf(i)} 
          />)
        }
      </div>
    </>
  )
};
