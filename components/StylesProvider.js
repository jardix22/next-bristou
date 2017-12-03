import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

const GlobalStyles = styled.div`
  body:not(&) {
    margin: 0;
    font-family: 'Roboto', Verdana, sans-serif;
  }
`

class StylesProvider extends Component {
  componentWillMount () {
    injectGlobal`
      @import url('//fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');
    `
  }

  render () {
    const { children } = this.props
    return <GlobalStyles>{ children }</GlobalStyles>
  }
}

export default StylesProvider
