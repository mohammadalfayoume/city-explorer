import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Error from "./Error";

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      city: "",
      lat: "",
      lon: "",
      err: [],
      showError: false,
      flag: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const lat = event.target.lon.value;
    const lon = event.target.lat.value;
    const city = event.target.city.value;
    const url = process.env.REACT_APP_URL2;
    const URL = `${url}weather1?searchQuery=${city}&lat=${lat}&lon=${lon}`;

    console.log(URL);

    try {
      let result = await axios.get(URL);
      console.log(result);

      this.setState({
        data: result.data,
        city: city,
        lat: lat,
        lon: lon,
        showError: false,
        flag: true,
      });
    } catch {
      console.log("err");

      this.setState({
        showError: true,
      });
    }
  };

  errorFun = () => {
    this.setState({
      showError: false,
    });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <h2>City name</h2>
            </Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="Enter a city name"
              style={{ textAlign: "center", width: "auto", margin: "auto" }}
            />
            <Form.Label>
              <h2>Latitude</h2>
            </Form.Label>
            <Form.Control
              type="text"
              name="lat"
              placeholder="Enter a latitude"
              style={{ textAlign: "center", width: "auto", margin: "auto" }}
            />
            <Form.Label>
              <h2>Longitude</h2>
            </Form.Label>
            <Form.Control
              type="text"
              name="lon"
              placeholder="Enter a longitude"
              style={{ textAlign: "center", width: "auto", margin: "auto" }}
            />
            <Button variant="primary" type="submit" style={{ margin: "20px" }}>
              Search
            </Button>
            <Form.Text className="text-muted">
              {this.state.data.map((i) => {
                return (
                  <div>
                    <h1>{i.description}</h1>
                    <h1>{i.date}</h1>
                  </div>
                );
              })}
            </Form.Text>
          </Form.Group>
        </Form>
        {this.state.showError && <Error error={this.errorFun} />}
      </div>
    );
  }
}

export default Weather;
