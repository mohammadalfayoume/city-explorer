import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Error from "./Error";



class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      lat: "",
      lon: "",
      showError: false,
      flag: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    const lat = event.target.lon.value;
    const lon = event.target.lat.value;
    const URL = `http://localhost:3001/wheather?city=${city}lat=${lat}&lon=${lon}`;

    try {
      let resp = await axios.get(URL);

      this.setState({
        city: resp.data[0].city_name,
        lat: resp.data[0].lat,
        lon: resp.data[0].lon,
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
            style={{textAlign:'center',width:'auto',margin:'auto'}}
          />
          <Form.Label>
            <h2>Latitude</h2>
            </Form.Label>
          <Form.Control
            type="text"
            name="lat"
            placeholder="Enter a latitude"
            style={{textAlign:'center',width:'auto',margin:'auto'}}
          />
          <Form.Label>
            <h2>Longitude</h2>
            </Form.Label>
          <Form.Control
            type="text"
            name="lon"
            placeholder="Enter a longitude"
            style={{textAlign:'center',width:'auto',margin:'auto'}}
          />
          <Button variant="primary" type="submit" style={{margin:'20px'}}>
          Search
        </Button>
          <Form.Text className="text-muted">
            {this.state.flag &&<h4>City Name: {this.state.city}</h4>}
            {this.state.flag &&<h4>Latitude: {this.state.lat}</h4>}
            {this.state.flag &&<h4>Longitude: {this.state.lon}</h4>}
            
          </Form.Text>
        </Form.Group>
        
        
      </Form>
      {this.state.showError && <Error error={this.errorFun} />}
      </div>
    )
  }
}

export default Weather