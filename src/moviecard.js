import React from 'react'

function Moviecard(props){
    return(
        <div className="main4" >
{props.tab.map(el => 
    <a href="#" className="main4-image">
    <img style={{borderTopLeftRadius :'6px' ,borderTopRightRadius:'6px'}} 
    src={el.source} />
    
        <p className="image-name">{el.name}</p>
        
</a>)
  }  </div>)

    
}
export default Moviecard;