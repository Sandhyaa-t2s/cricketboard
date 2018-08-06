import React, { Component } from 'react';
import images from './images.jpg';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      Score : false , teamname:false
    }

   
    this.bringScore = this.bringScore.bind(this)

    this.gettingscore = this.gettingscore.bind(this)
  }

  bringScore(){
    this.setState({Score: !this.state.Score })
    this.setState({teamname :!this.state.teamname})
  }

  gettingscore(){

    this.setState({Score: !this.state.Score })
    this.setState({teamname :this.state.teamname})
  }


render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={images} className="App-logo" alt="logo" />
          <h1 className="App-title">CRICKET DASHBOARD</h1>
        </header>
        <button className="btn" onClick={this.bringScore.bind(this)} onclick={this.toggleswitch}> Score</button>
        <button className="btn2"  onClick={this.gettingscore.bind(this)} onclick={this.toggleswitch}>Team Name</button>
       {this.state.Score ? <Points/> : "" }
       {this.state.teamname ? <Details/> : ""}
       </div>
     );
  }
}

function Points() {
    return (
      
      <div>
          <table>
            <tbody><tr>
                <th>Team Name</th>
                <th>match Played</th>
                <th>won</th>
                <th>lost</th>
                <th>Team Name</th>
                <th>match played</th>
                <th>won</th>
                <th>lost</th>
              </tr>
              <tr>
                <td>Chennai SuperKings</td>
                <td>14</td>
                <td>9</td>
                <td>4</td>
                <td>Sun Rise Hyderbad</td>
                <td>9</td>
                <td>14</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Kings XI Punjab</td>
                <td>14</td>
                <td>6</td>
                <td>5</td>
                <td>Mumbai Indians</td>
                <td>14</td>
                <td>6</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Delhi Dare Devils</td>
                <td>14</td>
                <td>5</td>
                <td>6</td>
                <td>Rajashthan Royals</td>
                <td>14</td>
                <td>7</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Royal Challenges Bangalore</td>
                <td>14</td>
                <td>6</td>
                <td>4</td>
                <td>Kolkata Knight Riders</td>
                <td>14</td>
                <td>8</td>
                <td>3</td>
              </tr>
            </tbody></table>
            </div>
    );
  
}

function Details() {
  return (

<div>
        <table>
          <tbody><tr>
              <th>Team Name</th>
              <th>Captain</th>
              <th>Team Name</th>
              <th>captain</th>
            </tr>
            <tr>
              <td>Chennai SuperKings</td>
              <td>Mahendra Singh Dhoni</td>
              <td>Sun Rise Hyderbad</td>
              <td>Kane Williamson </td>
            </tr>
            <tr>
              <td>Kings XI Punjab</td>
              <td>Ravichandran Ashwin</td>
              <td>Mumbai Indians</td>
              <td>Rohit Sharma</td>
            </tr>
            <tr>
              <td>Delhi Dare Devils</td>
              <td>Gautam Gambhir</td>
              <td>Rajashthan Royals</td>
              <td>Ajinkya Rahane </td>
            </tr>
            <tr>
              <td>Royal Challenges Bangalore</td>
              <td>Virat Kohli</td>
              <td>Kolkata Knight Riders</td>
              <td>Dinesh Karthik</td>
            </tr>
          </tbody></table>
          </div>
      
  );


}
export default App;
