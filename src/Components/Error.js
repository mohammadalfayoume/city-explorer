import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

class Error extends Component {
  setShow = () => {
    this.props.errorFun();
  };

  render() {
    return (
      <Alert variant="danger" onClose={this.setShow} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
}

export default Error;
