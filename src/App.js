import React from "react";
import './App.css';
import StatTracker from './statTracker';
import TeamForm from "./teamForm";
import StatDetailForm from "./statDetailForm";

function App() {
  return (
    <div className="main">
      <div className="teamTableOne">
        <TeamForm team={ 'One' }/>
      </div>
      <div className="statTracker">
        <StatTracker />
      </div>
      <div className="teamTableTwo">
        <TeamForm team={ 'Two' }/>
      </div>
      <div className="statDetailForm">
        <StatDetailForm />
      </div>
    </div>
  );
}

export default App;
