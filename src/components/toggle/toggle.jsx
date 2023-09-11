import React, { Component } from 'react'
import { ThemeProvider,createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    background: ${(props)=>props.theme.bg};
    color: ${(props)=>props.theme.cl};
}
`
export default class Toggle extends Component {

    state = {light:true}
    render() {
        const theme = {
            bg: this.state.light ? "white" : "black",
          cl:this.state.light ? "black" : "white"
      }
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <button onClick={()=>this.setState({light: !this.state.light})}>Night || Day</button>
      </ThemeProvider>
    )
  }
}
