import React from "react"

class NextButton extends React.Component {
  render() {
    return (
      <div className="next-question-container">
        <hr/>
        <button className="btn btn-success pull-right">Next</button>
      </div>
    )
  }
}

module.exports = NextButton
