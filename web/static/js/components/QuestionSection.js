import React from "react"
import ReactDOM from "react-dom"

import Question from "./Question"
import Choice from "./Choice"

class QuestionSection extends React.Component {
  render() {
    return (
      <div className="question-section">
        <Question text="What is the correct choice?" />
        {this.choices()}
      </div>
    )
  }

  choices() {
    return (
      <div className="choices">
        <Choice text="Choice 1" />
        <Choice text="Choice 2" />
        <Choice text="Choice 3" />
        <Choice text="Choice 4" />
      </div>
    )
  }
}

module.exports = QuestionSection
