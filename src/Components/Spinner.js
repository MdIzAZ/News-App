import React, { Component } from 'react'
import load from '../200w.webp'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={load} alt="" />
      </div>
    )
  }
}
