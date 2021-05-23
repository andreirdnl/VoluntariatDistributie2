type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const FilterActionBar: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return (
        <div className="filter">
            <div className="filterName">sorteaza dupa</div>
            <ul>
                <li>
                    recente
                </li>
                <li>
                    apropiate
                </li>
                <li>
                    <div className="filterSegmentName">volum:</div>
                    <div className="actionButtons">
                        <img src='https://picsum.photos/40/20' />
                        <img src='https://picsum.photos/40/20' />
                        <img src='https://picsum.photos/40/20' />
                    </div>
                </li>
            </ul>
        </div>
    )
  };
  