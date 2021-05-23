type external = {
    name: keyof State["item"];
  };
  
  type props = {
    item: State["item"][keyof State["item"]];
  };
  
  export const Beneficiary: view<external> = ({
    item = observe.item[prop.name],
  }: props) => {
    return (
      <>
        <div className="beneficiarTitle">Beneficiar</div>
        <div className="beneficiar">
            <div className="avatar">
                <img src="https://picsum.photos/50/50" />
            </div>
            <div className="beneficiarDetails">
                <div className="name">Stefan Bulescu</div>
                <div className="email">gradinita31.urziceni@gmailcom</div>
                <div className="phone">0742556198</div>
                <div className="address">Urziceni, Aleea Invataturii, nr 7</div>
                <div className="ong">Salvati Gradinitele</div>
                <div className="nevoi">Calculator</div>
            </div>
        </div>
      </>
    );
  };
  