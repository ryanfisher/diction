import React from "react"

class NextButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div className="next-question-container">
        <hr/>
        <button className="btn btn-success pull-right" onClick={this.handleClick}>Next</button>
      </div>
    )
  }

  handleClick() {
    this.props.onNextClick();
  }
}

module.exports = NextButton
