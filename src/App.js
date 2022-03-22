import React from "react";
import './App.css';
import StatTracker from './statTracker';
import TeamForm from "./teamForm";
import StatDetailForm from "./statDetailForm";
import ErrorBoundry from "./errorBoundry";
import PeriodSelector from "./periodSelector";
import ActionDisplay from "./actionDisplay";

function App() {
  return (
    <div className="main">
      <div className="teamTableOne">
        <ErrorBoundry>
          <h1>Team 1</h1>
          <TeamForm team={ 'One' }/>
        </ErrorBoundry>
      </div>
      <div className="statTracker">
        <ErrorBoundry>
          <h1 className="title">Shot Tracking</h1>
          <StatTracker />
        </ErrorBoundry>
      </div>
      <div className="teamTableTwo">
        <ErrorBoundry>
          <h1 className="teamTwo">Team 2</h1>
          <TeamForm team={ 'Two' }/>
        </ErrorBoundry>
      </div>
      <div className="actionDisplayOne">
      <ErrorBoundry>
          <ActionDisplay team={ 'One' }/>
        </ErrorBoundry>
      </div>
      <div className="actionDisplayTwo">
      <ErrorBoundry>
          <ActionDisplay team={ 'Two' }/>
        </ErrorBoundry>
      </div>
      <div className="statDetail">
        <ErrorBoundry>
          <StatDetailForm />
        </ErrorBoundry>
      </div>
      <div className="periodSelector">
        <ErrorBoundry>
          <PeriodSelector />
        </ErrorBoundry>
      </div>
      <div className="instructions"> 
        <p>
          <u>To record shots:</u>
          <br/>
          Select a location on the ice, choose a player and select an outcome.
          <br/>
          Use the period selector to choose a period.
        </p>
      </div>
    </div>
  );
}

export default App;
