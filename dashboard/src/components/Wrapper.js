import styled from "styled-components"
import React, { Component } from "react"

const Container = styled.main`
  height: 100%;
  position: relative;
`

export default class Wrapper extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}
