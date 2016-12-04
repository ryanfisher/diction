import React from "react"
import ReactDOM from "react-dom"

class Choice extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">{this.props.text}</div>
      </div>
    )
  }
}

module.exports = Choice
