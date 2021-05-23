import { Component } from "./Component";
import { greeting } from "./greeting";
import { TripsView } from './views'
import './App.css'

export const App: view = ({ greeting = observe.greeting }) => (
  <>
    <TripsView />
  </>
);

//App.producers([greeting]);
