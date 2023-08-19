import styled from 'styled-components';
import { Component } from 'react';
import Section from './Section';
import Button from './Button';
import Statistics from './Statistics';

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
`;

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addNewFeedback = event => {
    const button = event.target;
    const category = button.textContent.toLowerCase();
    const incValue = 1;

    this.setState(prevState => ({
      [category]: prevState[category] + incValue,
    }));
  };

  countTotalFeedback = () => {
    const { ...feedbackValues } = this.state;
    return Object.values(feedbackValues).reduce(
      (total, value) => total + value,
      0
    );
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <StyledApp>
        <Section title="Please leave feedback">
          <Button handler={this.addNewFeedback}>Good</Button>
          <Button handler={this.addNewFeedback}>Neutral</Button>
          <Button handler={this.addNewFeedback}>Bad</Button>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
          ></Statistics>
        </Section>
      </StyledApp>
    );
  }
}
