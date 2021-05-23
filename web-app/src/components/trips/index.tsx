import { FilterActionBar } from '../FilterActionBar'
import { Trip } from '../'
import style from './style.module.css' 

export const Table: view = ({
  dataSet = prop.data,
}) => {
  return (
    <>
      <div className="tableHeader">
          <div className="tableName">Lista Curse</div>
          <FilterActionBar />
      </div>
      <div data-ui="Trips--List" className={style.trips}>
        {
          dataSet.map(i=>
          <Trip 
            key={dataSet.indexOf(i)} 
            itemIndex={dataSet.indexOf(i)} 
          />)
        }
      </div>
    </>
  )
};
