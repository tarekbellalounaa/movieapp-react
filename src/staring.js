import React from 'react';


class Star extends React.Component{
constructor(props) {
    super(props);
  this.state={
      rate:1
  }  
  
}


render(){
    let tab =[]
    for(let i=0;i<=4;i++){
        if(this.props.rating > i){ 
            tab.push(<i onClick={()=>this.props.staring(i+1)} class="fas fa-star color"></i>)
        }
        else tab.push(<i onClick={()=>this.props.staring( i+1)} class="far fa-star color"></i>)
    }
    return(
        <div className="staring">
            { tab }
        </div>
    )
}
}
export default Star;