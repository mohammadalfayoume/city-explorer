import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { async } from 'jshint/src/prod-params';
import axios from 'axios';



class Map extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        display_name : '',
        lat : '',
        lon : '',
        errFlag : false,
        mapFlag : false
      }
    }

    handleSubmit= async (event)=>{
        event.preventDefault();
        const cityName = event.target.city.value;
        const key = 'pk.d73ef3de33678cbc95d199ed9ae38bbe';
        const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`
    
    try 
    {
      let resResult = await axios.get(URL);
      this.setState({
        display_name : resResult.data[0].display_name,
        lat : resResult.data[0].lat,
        lon : resResult.data[0].lon,
        mapFlag : true
      })
    }
    catch
    {
      console.log('err');
      this.setState({
        errFlag : true
      })
    }
    }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter the city name</Form.Label>
        <Form.Control type="text" name="city" placeholder="Enter the city name" />
      </Form.Group>
      <Form.Text className="text-muted">
          <p>{this.state.display_name}</p>
          <p>{this.state.lat}</p>
          <p>{this.state.lon}</p>
          {this.state.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lon}`}></img>}
        {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}
        </Form.Text>

      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
    )
  }
}

export default Map