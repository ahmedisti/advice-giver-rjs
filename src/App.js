import React from "react";
import axios from "axios";
import "./App.css";
class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const {advice} = response.data.slip; // destructure
        this.setState({ advice }); // set the state 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state; //destructure
    return (

        <div className="app">
            <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={this.fetchAdvice}>
              <span>Click For Advice</span>
            </button>
            </div>
        </div>
    );
  }
}

export default App;
