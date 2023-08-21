import { Component } from 'react';

import {
  Container,
  FeedbackOptions,
  Notification,
  Section,
  Statistics,
} from './components/index';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addNewFeedback = event => {
    const button = event.currentTarget;
    const category = button.textContent.toLowerCase();
    const incValue = 1;

    this.setState(prevState => ({
      [category]: prevState[category] + incValue,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.addNewFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
