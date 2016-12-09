import React from "react"
import ReactDOM from "react-dom"

import Question from "./Question"
import Choice from "./Choice"

class QuestionSection extends React.Component {
  render() {
    return (
      <div className="question-section">
        <Question text={this.props.question} />
        <div className="choices">
          {this.choices()}
        </div>
      </div>
    )
  }

  choices() {
    return (
      this.props.choices.map(choice =>
        <Choice
          key={choice.id}
          selected={this.props.selectedChoice === choice.id}
          correct={this.props.correctChoice === choice.id}
          onChoiceSelect={this.props.onChoiceSelect}
          {...choice} />
      )
    )
  }
}

module.exports = QuestionSection
