import React from 'react';
import marked from 'marked';

//Code for line breaks
marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      rawtext : placeholder,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({rawtext: event.target.value})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>MarkDown Previewer</h1>
          <p>Inserte su texto en estilo MD a la izquierda, previsualice a la derecha.</p>
          <p><em>De nada.</em></p>
        </header>
        <main className="App-body">
          <Editor onChange={this.handleChange} value={this.state.rawtext}/>
          <Previewer markuped={this.state.rawtext}/>
        </main>
        <Footer />
      </div>
    );
  }

}

const Editor = (props) => {
  return (
    <div className="App-window App-editor">
      <h2>Editor</h2>
      <textarea
        value={props.value}
        onChange={props.onChange}
        id="editor" />
    </div>
  )
}

function Previewer(props){

  return (
    <div className="App-window App-previewer">
      <h2>Resultado</h2>
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.markuped)}} />
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <p>
        made with <span rol="img" aria-label="love"></span> ❤️ by <a href="https://www.github.com/juanbovo" rel="noopener noreferrer" target="_blank">juampi</a> @
        <a href="https://www.freecodecamp.com/" rel="noopener noreferrer" target="_blank">freeCodeCamp <i className="fab fa-free-code-camp"></i></a>
      </p>
    </div>
  )
}

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`

export default App;
//ReactDOM.render(<App />, document.getElementById('root'));