import styled from 'styled-components';
import { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const StyledApp = styled.div`
  background-color: #fff;
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  color: #313131;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

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
      <StyledApp>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.addNewFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback ? (
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
      </StyledApp>
    );
  }
}
