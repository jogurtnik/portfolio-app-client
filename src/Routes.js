import React from "react"
import { Switch } from "react-router-dom"
import AppliedRoute from "./components/AppliedRoute"
import Home from "./containers/Home"
import NotFound from "./containers/NotFound"

export default () =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} />

    { /* Finally, catch all unmatched routes */ }
    <AppliedRoute component={NotFound} />
  </Switch>
