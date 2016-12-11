import React from "react"

import Question from "./Question"
import NextButton from "./NextButton"
import Choice from "./Choice"

class QuestionSection extends React.Component {
  render() {
    return (
      <div className="question-section">
        <Question text={this.props.question} />
        <div className="choices">
          {this.choices()}
        </div>
        {this.nextButtonRender()}
      </div>
    )
  }

  nextButtonRender() {
    if (this.props.selectedChoice) {
      return <NextButton onNextClick={this.props.onNextClick} />
    }
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
