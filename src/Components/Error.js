import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

class Error extends Component {
  setShow = () => {
    this.props.error();
  };

  render() {
    return (
      <Alert variant="danger" onClose={this.setShow} dismissible>
        <Alert.Heading>!You got an error!</Alert.Heading>
        <p>
          Something Wrong
        </p>
      </Alert>
    );
  }
}

export default Error;
