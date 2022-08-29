import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Error from "./Error";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "",
      lat: "",
      lon: "",
      showError: false,
      flag: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const NameOfCity = event.target.city.value;
    const key = process.env.REACT_APP_API_TOKEN;
    const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${NameOfCity}&format=json`;

    try {
      let responseResult = await axios.get(URL);

      this.setState({
        cityName: responseResult.data[0].display_name,
        lat: responseResult.data[0].lat,
        lon: responseResult.data[0].lon,
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
          <Button variant="primary" type="submit" style={{margin:'20px'}}>
          Search
        </Button>
          <Form.Text className="text-muted">
            {this.state.flag &&<h4>City Name: {this.state.cityName}</h4>}
            {this.state.flag &&<h4>Latitude: {this.state.lat}</h4>}
            {this.state.flag &&<h4>Longitude: {this.state.lon}</h4>}
            {this.state.flag && (
              <img style={{width:'500px', border:'10px solid black', borderRadius:'30px'}}
                src={`https://maps.locationiq.com/v3/staticmap?key=pk.d73ef3de33678cbc95d199ed9ae38bbe&center=${this.state.lat},${this.state.lon}&zoom=18&size=300x300&format=png&maptype=roadmap&markers=icon:small-red-cutout|${this.state.lat},${this.state.lon}&markers=icon:small-red-cutout|${this.state.lat},${this.state.lon}`}
                alt={'map'}
              />
            )}
          </Form.Text>
        </Form.Group>
        
        
      </Form>
      {this.state.showError && <Error error={this.errorFun} />}
      </div>
    );
  }
}

export default Main;
