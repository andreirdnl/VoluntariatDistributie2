import { From, To } from '../'
import { TItemDescription as TableItemDescription } from '../TItemDescription'
import style from './style.module.css'
import style2 from '../../styles/button.module.css'
  
export const Trip: view = ({
  getDetails = observe.details[prop.itemIndex],
  setDetails = update.details[prop.itemIndex],
  item = observe.dataSet[prop.itemIndex],
  index = prop.itemIndex
}) => {
  const {donator,recipient,donation} = item
  return (
    <div data-ui="Trip" className={style.trip} >
      <div className={style.summary} >
        <From donator={donator} donation={donation}/>
        <To recipient={recipient}/>
        <div role="row" className={style.props}>
          <div className={style.date}>14 mai</div>
          <div className={style.sidetrack}>3 km</div>
          <div role="cell">
            <button className={style2.button} onClick={()=>setDetails.set(!getDetails)}>Vezi Cursa</button>
          </div>
        </div>
      </div>
      {getDetails&& <TableItemDescription index={index}/>}
    </div>
  )
};
