import { FilterActionBar } from './FilterActionBar'
import { TItem as TableItem } from './TItem'

type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const Table: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return (
        <div className="tabel">
            <div className="tableHeader">
                <div className="tableName">Lista Curse</div>
                <FilterActionBar />
            </div>
            <div className="tableContent">
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
            </div>
        </div>
    )
  };
  