import React, { useState, useEffect } from 'react';

const bankOne = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const bankTwo = [{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];


function App() {
  const [display, setDisplay] = useState('display')
  const [soundBank, setSoundBank] = useState(bankOne)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Drum Machine</h1>
        <h3>La máquene del sonidoo...</h3>
        <p id="display">{display}</p>
        <DrumBank setSoundBank={setSoundBank} soundBank={soundBank}/>
        <DrumMachine setDisplay={setDisplay} soundBank={soundBank}/>
      </header>
    </div>
  );
}

function DrumMachine(props) {
  
  return <div>
    <div id="drum-machine">
            {props.soundBank.map(pad => <DrumPad
              key={pad.id}
              id={pad.id}
              keyTrigger={pad.keyTrigger}
              keyCode={pad.keyCode}
              url={pad.url}
              setDisplay={props.setDisplay}
              />)}
    </div>
  </div>
}

function DrumBank(props){
  const [soundBankName, setSoundBankName] = useState('Bank One')

  const handleSoundBank = () => {
    if (props.soundBank === bankOne) {
      props.setSoundBank(bankTwo)
      setSoundBankName('Bank Two')
    } else {
      props.setSoundBank(bankOne)
      setSoundBankName('Bank One')
    }
  }

  return <>
    <div id="drum-bank-container">
      <button id="drum-button" onClick={handleSoundBank}>{soundBankName}</button>
    </div>
  </>
}

function DrumPad(props){

  useEffect(()=>{
    document.addEventListener('keydown', playKey)
    return () => document.removeEventListener('keydown', playKey)
  })

  const playKey = (e) => {
    if (e.keyCode === props.keyCode){
      const sound = document.getElementById(props.keyTrigger)
      
      sound.play()
      props.setDisplay(props.id)
    }
  }

  const playSound = () => {
    const sound = document.getElementById(props.keyTrigger)

    props.setDisplay(props.id)
    sound.play()
  }

  return <div 
            className="drum-pad"
            id={props.id}
            onClick={playSound}
          > {props.keyTrigger}
          <audio
            className="clip"
            id={props.keyTrigger}
            src={props.url}
          >
          </audio>
  </div>
}


export default App;
//ReactDOM.render(<App />, document.getElementById('root'));