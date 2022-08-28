import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { async } from 'jshint/src/prod-params';


class Map extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        display_name : '',
        lat : '',
        lon : '',
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
        <Form.Control type="text" name="city" placeholder="Enter the city name" {} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
    )
  }
}

export default Map