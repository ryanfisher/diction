import React from "react"
import ReactDOM from "react-dom"

class Question extends React.Component {
  render() {
    return (
      <p>{this.props.text}</p>
    )
  }
}

module.exports = Question
