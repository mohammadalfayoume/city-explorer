import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

class Weather02 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: [],
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    const url = process.env.REACT_APP_URL;
    const URL = `${url}weather?city=${city}`;
    console.log(URL);

    try {
      let result = await axios.get(URL);
      console.log(result.data);

      this.setState({
        city: result.data,
      });
    } catch {
      console.log("err");
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <hr></hr>
        <Form.Label>
        <h1>Weather Section from Weatherbit server for 16 days</h1>
          </Form.Label>
          <br></br>
          <hr></hr>
          <Form.Label>
            <h2>City name</h2>
          </Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="Enter a city name"
            style={{ textAlign: "center", width: "auto", margin: "auto" }}
          />
          <Button variant="primary" type="submit" style={{ margin: "20px" }}>
            Explore
          </Button>
          <Form.Text className="text-muted">
            {this.state.city.map((item,idx) => {
              return (
                <div>
                  <h2>{idx+1}</h2>
                  <h3>Description: {item.description}</h3>
                  <h3>Date: {item.date}</h3>
                </div>
              );
            })}
          </Form.Text>
        </Form.Group>
      </Form>
    );
  }
}

export default Weather02;
