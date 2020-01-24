import React, { Component } from 'react';



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
import AddModal from './addmodal';
import Star from "./staring"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovies : [
        {
          image: blade,
     play: <i class="fas  fa-3x fa-play"></i>,
          
          title: "Blade Runner",
          year: "2019" ,
          rating : 4
        },
      
        {
          image: avengers ,
           play: <i class="fas fa-3x fa-play"></i>,
          title: "Avengers",
          year: "2019" ,
          rating : 4
        },
      
        {
          image: joker,
           play: <i class="fas fa-3x fa-play"></i>,
          title: "Joker",
          year : "2019",
          rating : 1       },
      
        {
          image: underground ,
           play: <i class="fas fa-3x fa-play"></i>,
          title: "6 Underground",
          year : "2019",
          rating : 3       },
      
        {
          image: mission,
           play: <i class="fas fa-3x fa-play"></i>,
          title: "Mission Impossible",
          year : "2019",
          rating : 4       },
        {
          image: terminator,
           play: <i class="fas fa-3x fa-play"></i>,
          title: "The Last Terminator",
          year : "2019",
          rating : 4       },
        {
          image: parasite,
           play: <i class="fas fa-3x fa-play"></i>,
          title: "Parasite",
          year : "2019",
          rating : 4       },
      
        {
          image: badboys,
           play: <i class="fas fa-3x fa-play"></i>,
          title: "The Explosion",
          year : "2019",
          rating : 4       }
      ],
      keyword: '',
      rate:1
    }
  }
rate = x =>{
  this.setState({rate:x})
}

  add = movie => {
    this.setState({listMovies : this.state.listMovies.concat(movie)})
  }
  searchMovie = keyword => {
    this.setState({keyword: keyword})
  }
  render(){
    return (
    <div className="App">
    <div className="header">
    <AddModal add={x => this.add(x)}/> 
    <Search searchMovie={x => this.searchMovie(x)}/>
  
    <Star staring={star => this.rate(star)}  rating={this.state.rate}/>
    </div>
     <Moviecard tab={this.state.listMovies.filter(el =>el.rating>=this.state.rate && el.title.toLowerCase().includes(this.state.keyword.toLowerCase().trim()))} />
     
    </div>
  );
    }
}

export default App;
