import { ReactComponent as SVGBox } from '../../assets/filter-box.svg' 
import { ReactComponent as SVGCar } from '../../assets/filter-car.svg' 
import { ReactComponent as SVGTruck } from '../../assets/filter-truck.svg' 
import style from './style.module.css'

export const FilterBar: view = ({
  getFilterBar = observe.filterBar,
  setFilterBar = update.filterBar
}) => {
  return (
      <div data-ui="FilterBar" className={style.filters}>
          <span>Filtreaza dupa: </span>
          <button aria-selected={getFilterBar.option0} onClick={()=>{setFilterBar.set({...getFilterBar, option0:!getFilterBar.option0})}}><SVGBox /></button>
          <button aria-selected={getFilterBar.option1} onClick={()=>{setFilterBar.set({...getFilterBar, option1:!getFilterBar.option1})}}><SVGCar /></button>
          <button aria-selected={getFilterBar.option2} onClick={()=>{setFilterBar.set({...getFilterBar, option2:!getFilterBar.option2})}}><SVGTruck /></button>
      </div>
  )
};
