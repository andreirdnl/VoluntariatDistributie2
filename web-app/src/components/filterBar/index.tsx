import { ReactComponent as SVGBox } from '../../assets/filter-box.svg' 
import { ReactComponent as SVGCar } from '../../assets/filter-car.svg' 
import { ReactComponent as SVGTruck } from '../../assets/filter-truck.svg' 
import style from './style.module.css'

type external = {
  name: keyof State["item"];
};

type props = {
  item: State["item"][keyof State["item"]];
};

export const FilterBar: view<external> = ({
  item = observe.item[prop.name],
}: props) => {
  return (
      <div data-ui="FilterBar" className={style.filters}>
          <span>Filtreaza dupa: </span>
          <button aria-selected="true"><SVGBox /></button>
          <button aria-selected="true"><SVGCar /></button>
          <button aria-selected="false"><SVGTruck /></button>
      </div>
  )
};
