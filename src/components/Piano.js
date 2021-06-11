/* eslint-disable default-case */
import React, { useState } from 'react';
import * as Tone from 'tone'
import './piano.scss'
//import Animation from "./Animation"

export default function Piano() {
  const synth = new Tone.Synth().toDestination();
  // Set the tone to selected oscilator
  /*const select = document.querySelector("select");
  const selectedChoice = select.options[select.selectedIndex].text;
  */
 // const select = document.querySelector("select");
  
    synth.oscillator.type = "sine2";
  
  //let [option,setOption]= useState('sine2');
  //synth.oscillator.type = ;
 
 /* function handleChange(event){
    setOption(event.target.value)
    synth.oscillator.type = event.target.value;
}
   */
  
    document.addEventListener("mousedown", e => {
      // fires off a note continously until trigger is released
      synth.triggerAttackRelease(e.target.dataset.note);
    });
    
    document.addEventListener("mouseup", e => {
      // stops the trigger
      synth.triggerRelease();
    });
  

  // handles keyboard events
  document.addEventListener("keydown", e => {
    // e object has the key property to tell which key was pressed
    switch (e.key) {
      case "q":
        return synth.triggerAttackRelease("C4");
      case "2":
        return synth.triggerAttackRelease("C#4");
      case "w":
        return synth.triggerAttackRelease("D4");
      case "3":
        return synth.triggerAttackRelease("D#4");
      case "e":
        return synth.triggerAttackRelease("E4");
      case "r":
        return synth.triggerAttackRelease("F4");
      case "5":
        return synth.triggerAttackRelease("F#4");
      case "t":
        return synth.triggerAttackRelease("G4");
      case "6":
        return synth.triggerAttackRelease("G#4");
      case "y":
        return synth.triggerAttackRelease("A4");
      case "7":
        return synth.triggerAttackRelease("A#4");
      case "u":
        return synth.triggerAttackRelease("B4");
      case "v":
        return synth.triggerAttackRelease("C5");
      case "g":
        return synth.triggerAttackRelease("C#5");
      case "b":
        return synth.triggerAttackRelease("D5");
      case "h":
        return synth.triggerAttackRelease("D#5");
      case "n":
        return synth.triggerAttackRelease("E5");
      case "m":
        return synth.triggerAttackRelease("F5");
      case "k":
        return synth.triggerAttackRelease("F#5");
      case ",":
        return synth.triggerAttackRelease("G5");
      case "l":
        return synth.triggerAttackRelease("G#5");
      case ".":
        return synth.triggerAttackRelease("A5");
      case ";":
        return synth.triggerAttackRelease("A#5");
      case "/":
        return synth.triggerAttackRelease("B5");
        default:
        return;
    }
  });
  // when the key is released, audio is released as well
  document.addEventListener("keyup", e => {
    switch (e.key) {
      case "q":
      case "2":
      case "w":
      case "3":
      case "e":
      case "r":
      case "5":
      case "t":
      case "6":    
      case "y":
      case "7":
      case "u":
      case "v":
      case "g":
      case "b":
      case "h":
      case "n":
      case "m":
      case "k":
      case ",":
      case "l":
      case ".":
      case ";":
      case "/":
      synth.triggerRelease(); 
    }
  });
  
    

    return (
      <div className= "my">
      <div><span id="syn">Synthesizer</span>
      {/*<select name = 'value'> 
      <option value="square">Square</option>
      <option value="sine" >Sine</option>
      <option value="sine2">Sine 2</option>
      <option value="triangle">Triangle</option>
      <option value="sawtooth6" selected>Sawtooth</option>
    </select>*/}
      </div> 
  <ul  id="piano" >
  <li data-note="C4" class="key" id = "C4">
    <div data-note="C#4" class="black-key" id = "C#4">2</div>
    Q
  </li>
  <li data-note="D4" class="key" id = "D4">
    <div data-note="D#4" class="black-key" id = "D#4">3</div>
    W
  </li>
  <li data-note="E4" class="key" id = "E4">
    E
  </li>
  <li data-note="F4" class="key" id = "F4">
    <div data-note="F#4" class="black-key" id = "F#4">5</div>
    R
  </li>
  <li data-note="G4" class="key" id = "G4">
    <div data-note="G#4" class="black-key" id = "G#4">6</div>
    T
  </li>
  <li data-note="A4" class="key" id = "A4">
    <div data-note="A#4" class="black-key" id = "A#4">7</div>
    Y
  </li>
  <li data-note="B4" class="key" id = "B4">
    U
  </li>
  <li data-note="C5" class="key" id = "C5">
    <div data-note="C#5" class="black-key" id = "C#5">G</div>
    V
  </li>
  <li data-note="D5" class="key" id = "D5">
    <div data-note="D#5" class="black-key" id = "D#5">H</div>
    B
  </li>
  <li data-note="E5" class="key" id = "E5">
    N
  </li>
  <li data-note="F5" class="key" id = "F5">
    <div data-note="F#5" class="black-key" id = "F#5">K</div>
    M
  </li>
  <li data-note="G5" class="key" id = "G5">
    <div data-note="G#5" class="black-key" id = "G#5">L</div>
    ,
  </li>
  <li data-note="A5" class="key" id = "A5">
    <div data-note="A#5" class="black-key" id = "A#5">;</div>
    .
  </li>
  <li data-note="B5" class="key" id = "B5">
    /
  </li>
</ul>          
</div>
    )
}

