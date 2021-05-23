import { FilterActionBar } from './FilterActionBar'
import { TItem as TableItem } from './TItem'
  
  export const Table: view = ({
    dataSet = prop.data,
  }) => {
    return (
        <div className="tabel">
            <div className="tableHeader">
                <div className="tableName">Lista Curse</div>
                <FilterActionBar />
            </div>
            <div className="tableContent">
                {
                  dataSet.map(i=>
                  <TableItem 
                    key={dataSet.indexOf(i)} 
                    itemIndex={dataSet.indexOf(i)} 
                  />)
                }
            </div>
        </div>
    )
  };
  