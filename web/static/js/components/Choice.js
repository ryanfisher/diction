import React from "react"
import ReactDOM from "react-dom"

class Choice extends React.Component {
  constructor(props) {
    super(props)
    this.selectChoice = this.selectChoice.bind(this)
  }

  render() {
    return (
      <div className={this.className()} onClick={this.selectChoice}>
        <div className="panel-body">{this.props.text}</div>
      </div>
    )
  }

  selectChoice() {
    this.props.onChoiceSelect(this.props.id);
  }

  className() {
    let classes = "panel panel-default choice";
    if (this.props.selected) {
      classes += (this.props.correct ? " correct" : " wrong")
    }
    return classes;
  }
}

module.exports = Choice
