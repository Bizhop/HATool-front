import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './shared/Header'
import PlayersContainer from './players/PlayersContainer'
import PlayerContainer from './player/PlayerContainer'
import ImportContainer from './import/ImportContainer'
import DashContainer from './dash/DashContainer'
import LinesContainer from './lines/LinesContainer'
import ChartContainer from './chart/ChartContainer'

const NotFound = () => (
  <div className="container">
    <div className="jumbotron">
      <h1>Page not Found 404!</h1>
    </div>
  </div>
)

const Routes = () => (
  <div className="container pt-5">
    <Switch>
      <Route exact path="/" component={DashContainer} />
      <Route exact path="/players" component={PlayersContainer} />
      <Route exact path="/players/:id" component={PlayerContainer} />
      <Route exact path="/import" component={ImportContainer} />
      <Route exact path="/lines" component={LinesContainer} />
      <Route exact path="/chart" component={ChartContainer} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

const App = () => (
  <div className="app">
    <Header />
    <Routes />
  </div>
)

export default App
