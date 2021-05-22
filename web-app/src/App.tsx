import { Component } from "./Component";
import { greeting } from "./greeting";
import { CurseDisponibileView } from '../views/CurseDisponibile'

export const App: view = ({ greeting = observe.greeting }) => (
  <>
    <CurseDisponibileView />
  </>
);

//App.producers([greeting]);
