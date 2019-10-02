import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import TopNavigationBar from "./containers/TopNavigationBar"
import Routes from "./Routes"

import theme from "./theme"
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
      <ThemeProvider theme={theme}>
        <div className="App container">
          <TopNavigationBar />
          <Routes childProps={childProps} />
        </div>
      </ThemeProvider>
       
    )
  }
}

export default App
