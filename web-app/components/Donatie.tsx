type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const Donatie: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return (
        <>
            <div className="donatieTitle">Donatie</div>
            <div className="donatie">
                <div className="donatieDetails">
                    <div className="name">Calculator Pentium 3</div>
                    <div className="dimension">Incape intr-un portbagaj</div>
                    <div className="weight">mediu (5-10 kg)</div>
                    <div className="pieces">1</div>
                </div>
            </div>
        </>
    )
  };
  