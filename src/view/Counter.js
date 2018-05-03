import React from 'react';

class Counter extends React.Component {
  state = {
    from: this.props.from,
    to: this.props.to,
  };

  onCounterClicked = () => {
    this.setState({
      from: this.props.from,
    });
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.from > this.state.to) {
        this.setState({
          from: this.state.from - 1,
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const counterStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      height: '100px',
      width: '80%',
      padding: '2rem',
      borderRadius: '1rem',
      textAlign: 'center',
      fontSize: '2rem',
      backgroundColor: '#d7d7d7',
      borderRadious: '50%',
    };

    return (
      <div style={counterStyle} onClick={this.onCounterClicked}>
        Counter: {this.state.from}
      </div>);
  }
}

export default Counter;
