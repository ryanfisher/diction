import React from "react"

class Question extends React.Component {
  render() {
    return (
      <h3>{this.props.text}</h3>
    )
  }
}

module.exports = Question
