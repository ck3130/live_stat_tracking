import React from "react";
import './App.css';
import StatTracker from './statTracker';
import TeamForm from "./teamForm";

function App() {
  return (
    <>
      <StatTracker />
      <TeamForm team={ 'One' }/>
      <TeamForm team={ 'Two' }/>
    </>
  );
}

export default App;
