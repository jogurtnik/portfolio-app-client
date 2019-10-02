import React, { Component } from "react"
import TopNavigationBar from "./containers/TopNavigationBar"
import Routes from "./Routes"

import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      prop: "mockProp"
    }
  }
  render() {
    const childProps = {
      prop: this.state.prop
    }
    return (
        <div className="App container">
        <TopNavigationBar />
        <Routes childProps={childProps} />
      </div>
    )
  }
}

export default App
