import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

class Movie extends Component {
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
    const URL = `${url}movies?name=${city}`;
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
    /*
    title = item.original_title;
    overview = item.overview;
    average_votes = item.vote_average;
    total_votes = item.vote_count;
    image_url = item.poster_path;
    popularity = item.popularity;
    released_on = item.release_date;
    */
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <hr></hr>
          <Form.Label>
            <h1>Movies Section</h1>
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
            <Row xs={1} md={4} className="g-4" classN>
              {this.state.city.map((item) => {
                console.log(item);
                return (
                  <div className="cards">
                    <Col>
                      <Card>
                        <Card.Img
                          variant="top"
                          src={
                            "https://image.tmdb.org/t/p/w500" + item.image_url
                          }
                        />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                            <h6>Description: {item.overview}</h6>
                            <h4>Avg. votes: {item.average_votes}</h4>
                            <h4>Total votes: {item.total_votes}</h4>
                            <h4>Popularity: {item.popularity}</h4>
                            <h4>Released_on: {item.released_on}</h4>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </div>
                );
              })}
            </Row>
          </Form.Text>
        </Form.Group>
      </Form>
    );
  }
}

export default Movie;
