import React from 'react'
import Addmodal from './addmodal.js'
import Star from './staring'
import HOC from './hoc'
function Moviecard(props){
    return(
        <div className="main4" >
{props.tab.map(el => 
    <a href="#" className="main4-image">
    <img className="image-style"  
    src={el.image} />
    <p class="year">{el.year}</p>
    <p className="playbutt">{el.play}</p>
        <p className="image-name">{el.title}</p>
        <div className="stars">
        <Star staring={() =>{} } rating={el.rating} />
        </div>
</a>)
  }  </div>)

    
}
export default HOC(Moviecard);