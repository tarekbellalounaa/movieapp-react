import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
      ,title:"",
      image :"" ,
      year: "",
      rating :0
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // add = e => {
  //   let newmovie = { text: this.state.input, id: uuid(), complete: false };
  //   this.setState({ todos: this.state.todos.concat(newmovie) , input:""});
  // };


  render() {
    return (
      <div>
      <i  onClick={this.handleShow}  class="main4-img far fa-plus-square addbutt fa-4x"></i>
  
          <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input onChange={this.handleChange} type="text" name="title" />
              </div>
              <div>
                <label>Image:</label>
                <input onChange={this.handleChange} type="text" name="image" />
              </div>
              <div>
                <label>Rating:</label>
                <input onChange={this.handleChange} type="text" name="rating" />
              </div>
              <div>
                <label>Year:</label>
                <input onChange={this.handleChange} type="text" name="year" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            
            <Button onClick={e =>{this.props.add(this.state) ; this.setState({show: false}) }
            } variant="primary">Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;