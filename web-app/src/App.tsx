import { Component } from "./Component";
import { greeting } from "./greeting";
import { TripsView } from './views'
import seedy from "./assets/seedy.png"
import bine from "./assets/bine.png"
import './App.css'

export const App: view = ({ greeting = observe.greeting }) => (
  <>
    <TripsView />
    <footer>
      <div role="group">
        <b>DoLi</b> &nbsp;e un proiect <img src={seedy} /> sustinut de <img src={bine} />
      </div>
    </footer>
  </>
);

//App.producers([greeting]);
