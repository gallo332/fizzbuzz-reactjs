import React from "react"

class FizzBuzz extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      fizzBuzz: ''
    }
  }
  _fizzBuzz(num) {
    if (num % 15 === 0) {
      this.setState({fizzBuzz: 'FizzBuzz'});
    } else if (num % 5 === 0) {
      this.setState({fizzBuzz: 'Buzz'});
    } else if (num % 3 === 0) {
      this.setState({fizzBuzz: 'Fizz'});
    } else {
      this.setState({fizzBuzz: ''});
    }
  }
  
  _decrement() {
    if (this.state.count > 1) {
      this.setState({count: --this.state.count});
      this._fizzBuzz(this.state.count);
    }
  }
  
  _increment() {
    if (this.state.count < 100) {
      this.setState({count: ++this.state.count});
      this._fizzBuzz(this.state.count);
    }
  }
  
  render() { 
    const numberStyle = {
      fontSize: '64px',
    };

    
    return (
      <div className="col-sm-12 text-center">
        <h2
          style={numberStyle}>
          {this.state.fizzBuzz || this.state.count}

        </h2>
        <div className="btn-group">
          <button
            onClick={this._decrement.bind(this)}
            className="btn btn-lg btn-secondary">
            -
          </button>
          
          <button
            onClick={this._increment.bind(this)}
            className="btn btn-lg btn-primary">
            +
          </button>
        </div>
      </div>
    );
  }
 
}
export default FizzBuzz;
