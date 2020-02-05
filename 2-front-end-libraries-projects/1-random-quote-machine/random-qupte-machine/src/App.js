import React from 'react';
//import './App.css';

function App() {

  return <div className="App">
    <div id='wrapper'>
      <Quote />
    </div>
  </div>
}

class Quote extends React.Component {
  state = {
    randomQuote: {}
  }

  componentDidMount() {
    this.getRandomQuote()
  }

  getRandomQuote = event => {
    let randomNumber = Math.floor((Math.random() * 101) + 1);
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then(res => res.json())
      .then(quote => this.setState({ randomQuote: quote["quotes"][randomNumber] }))
  }

  render() {
    return (
      <div id="quote-box">
        <p id="text"> {this.state.randomQuote.quote} </p>
        <p id="author"> {this.state.randomQuote.author} </p>
        <button id="new-quote" onClick={this.getRandomQuote}>Nueva cita</button>
        <a
          href={`https://twitter.com/intent/tweet?text=${this.state.randomQuote.quote}%20-%20${this.state.randomQuote.author}%20%20%7C%7C&via=juanbovo`}
          id="tweet-quote"
          target="blank">¡Twitear!</a>
      </div>
    )
  }
}

//ReactDOM.render(<App />, document.getElementById('root'))
export default App;
