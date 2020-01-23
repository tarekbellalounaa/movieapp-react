import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import joker from './joker.jpg'
import underground from './6underground.jpg'
import badboys from './badboys.jpg'
import mission from './mission.jpg'
import parasite from './parasite.jpg'
import terminator from './terminator.jpg'
import blade from './blade.jpg'
import avengers from './avengers.jpg'
import './App.css';
import Moviecard from './moviecard'
import Search from './search'
import Addmovie from './addmovie.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabimg : [
        {
          source: blade,
          name: "Blade Runner",
          btn: "WATCH"
        },
      
        {
          source: avengers ,
          name: "Avengers",
          btn: "WATCH"
        },
      
        {
          source: joker,
          name: "Joker",
          btn: "WATCH"
        },
      
        {
          source: underground ,
          name: "6 Underground",
          btn: "WATCH"
        },
      
        {
          source: mission,
          name: "Mission Impossible",
          btn: "WATCH"
        },
        {
          source: terminator,
          name: "The Last Terminator",
          btn: "WATCH"
        },
        {
          source: parasite,
          name: "Parasite",
          btn: "WATCH"
        },
      
        {
          source: badboys,
          name: "The Explosion",
          btn: "WATCH"
        }
      ],
      keyword: ''
    }
  }
  searchMovie = keyword => {
    this.setState({keyword: keyword})
  }
  render(){
    return (
    <div className="App">
    <Search searchMovie={x => this.searchMovie(x)}/>
     <Moviecard tab={this.state.tabimg.filter(el => el.name.toLowerCase().includes(this.state.keyword.toLowerCase().trim()))} />
    </div>
  );
    }
}

export default App;
