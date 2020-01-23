import React, {Component} from 'react'
import uuid from 'uuid'
class Search extends Component{
    constructor(props) {
        super(props);
        this.state={
            input:""
        }
        
    }
    handleChange = e => {
        this.setState({ input: e.target.value });
      };
      add = e => {
        let newmovie = { text: this.state.input, id: uuid(), complete: false };
        this.setState({ todos: this.state.todos.concat(newmovie) , input:""});
      };
    

    render(){
        return(
            <div className="footer">
            <input
              onChange={e => this.props.searchMovie(e.target.value)}
              className="input"
              type="text"
              name="input"
              placeholder="Search for a movie"
            />
            <input
              onClick={this.add}
              className="addbutton"
              type="button"
              name="addition"
              value="Search"
            />
          </div>
        )
    }
}
export default Search;