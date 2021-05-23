
import { Trip } from '../'
import { ReactComponent as SVGArrow } from '../../assets/arrow.svg' 
import style from './style.module.css'

export const Table: view = ({
  dataSet = observe.dataSet,
  filterOptions = observe.filterBar,
  getDateSort = observe.dateSort,
  setDateSort = update.dateSort,
  getDistanceSort = observe.distanceSort,
  setDistanceSort = update.distanceSort
}) => {
  const {option0, option1, option2} = filterOptions
  const opArr = [option0, option1, option2]
  const filterData = dataSet.filter(f=>opArr[f.donation.sizeType])
  const dateSort = (type:string) => {
    if(type == 'none'){
      setDateSort.set('ascending')
      setDistanceSort.set('none')
    }
    if(type == 'ascending'){
      setDateSort.set('descending')
      setDistanceSort.set('none')
    }
    if(type == 'descending'){
      setDateSort.set('ascending')
      setDistanceSort.set('none')
    }
  }
  const distanceSort = (type:string) => {
    if(type == 'none'){
      setDistanceSort.set('ascending')
      setDateSort.set('none')
    }
    if(type == 'ascending'){
      setDistanceSort.set('descending')
      setDateSort.set('none')
    }
    if(type == 'descending'){
      setDistanceSort.set('ascending')
      setDateSort.set('none')
    }
  }
  console.log('sort',getDateSort,getDistanceSort)
  let sortData = filterData.slice().sort((a,b) => {
    if(getDateSort != 'none'){
      let aDate = new Date(a.donation.createdAt).getTime();
      let bDate = new Date(b.donation.createdAt).getTime();
      if(getDateSort == 'ascending') return bDate - aDate
      else if(getDateSort == 'descending') return aDate - bDate
    }

    if(getDistanceSort != 'none'){
      let aRoute = a.trip.distanceFromRoute
      let bRoute = b.trip.distanceFromRoute
      if(getDistanceSort == 'ascending') return aRoute - bRoute
      else if(getDistanceSort == 'descending') return bRoute - aRoute
    }
    
    return
  })

  return (
    <>
      <ul data-ui="Trips--List" className={style.header}>
          <li className={style.col1}>Donator</li>
          <li className={style.col2}>Beneficiar</li>
          <li className={style.col3} aria-sort={getDateSort} onClick={()=>dateSort(getDateSort)}>
            Adaugat {['ascending', 'descending'].includes(getDateSort) ? <SVGArrow />: ''}
          </li>
          <li className={style.col4} aria-sort={getDistanceSort} onClick={()=>distanceSort(getDistanceSort)}>
            Abatere traseu {['ascending', 'descending'].includes(getDistanceSort) ? <SVGArrow />: ''}
          </li>
      </ul>
      <div data-ui="Trips--List" className={style.trips}>
        {
          sortData.map(i=>
          <Trip 
            key={dataSet.indexOf(i)} 
            itemIndex={dataSet.indexOf(i)} 
          />)
        }
      </div>
    </>
  )
};
