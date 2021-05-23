type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const Donor: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return (
      <>
        <div className="donatorTitle">Donator</div>
        <div className="donator">
            <div className="avatar">
                <img src="https://picsum.photos/50/50" />
            </div>
            <div className="donatorDetails">
                <div className="name">Stefan Bulescu</div>
                <div className="email">stefan.bulescu@gmail.com</div>
                <div className="phone">123456789</div>
                <div className="address">Valea cascadelor, Bucuresti, sector 3, nr 112, sc 2, etaj 4, ap 50</div>
            </div>
        </div>
      </>
    )
  };
  