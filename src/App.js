import React from "react";
import './App.css';
import StatTracker from './statTracker';
import TeamForm from "./teamForm";
import StatDetailForm from "./statDetailForm";

function App() {
  return (
    <>
      <StatTracker />
      <TeamForm team={ 'One' }/>
      <TeamForm team={ 'Two' }/>
      <StatDetailForm />
    </>
  );
}

export default App;
