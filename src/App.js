import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    hex: '#000',
    rgb: 'rgb(0, 0, 0)'
  }

  hex2rgb (hex) {
    hex = hex.trim();
    hex = hex[0] === '#' ? hex.substr(1) : hex;
    var bigint = parseInt(hex, 16), h = [];
    if (hex.length === 3) {
      h.push((bigint >> 4) & 255);
      h.push((bigint >> 2) & 255);
    } else {
      h.push((bigint >> 16) & 255);
      h.push((bigint >> 8) & 255);
    }
    h.push(bigint & 255);
    return 'rgb('+h.join()+')';
  }

  calculate = (e) => {
    e.target.value[0] !== '#' 
      ? e.target.value = '#' + e.target.value 
      : e.target.value = e.target.value;
    e.target.value.length === 1 
      ? e.target.value = ''
      : e.target.value = e.target.value;
    
    let hex = e.target.value;
    let rgb = this.hex2rgb(hex);
    this.setState({ rgb });
  }

  render() {
    return (
      <div className="Content" style={{background: this.state.rgb}}>
        <div className="Menu">
          <h1>hregxb</h1>
          <ul className="Nav">
            <li><img src={require('./github.png')} width="90px" /></li>
            <li><a href="#">View Repo</a></li>
          </ul>
        </div>
        <div className="App">
          <div className="form">
            <input type="text" name="hex" maxlength="15" placeholder={this.state.hex} onChange={this.calculate} />
            <input type="text" name="rgb" placeholder={this.state.rgb} disabled />
            <br />
            <button>Convert</button>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
