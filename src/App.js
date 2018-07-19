import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import { Container, Row, Col , Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Display from './Containers/Display'
import DisplayName from './Containers/DisplayName'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            epicName: '',
            platform: 'pc',
            season: 'p2',
            fortnite: []
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePlatformChange = this.handlePlatformChange.bind(this);
        this.handleSeasonChange = this.handleSeasonChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="App">

                <Container>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>

                                    <Label>
                                        <h1>Fortnite API</h1>
                                        <Input type="text" value={this.state.epicName} onChange={this.handleNameChange}/>
                                        <Input type="select" value={this.state.platform} onChange={this.handlePlatformChange}>
                                            <option value="pc">PC</option>
                                            <option value="xbox">XBOX</option>
                                            <option value="ps4">PS4</option>
                                        </Input>
                                        <Input type="select" value={this.state.season} onChange={this.handleSeasonChange}>
                                            <option value= 'p2'>SOLO</option>
                                            <option value= 'p10'>DUOS</option>
                                            <option value= 'p9'>SQUADS</option>
                                        </Input>
                                        <Button className="submit-button">Submit</Button>
                                    </Label>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>

                    <DisplayName name={this.state.epicName}/>
                    <Display fortniteDis={this.state.fortnite}/>
                </Container>
            </div>
        );
    }

    handleNameChange(event) {
        this.setState({epicName: event.target.value});
    }

    handlePlatformChange(event) {
        this.setState({platform: event.target.value});
    }

    handleSeasonChange(event) {
        this.setState({season: event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.epicName+ ' ' + this.state.platform + ' ' + this.state.season);
        this.fetchFortnite(this.state.platform, this.state.epicName, this.state.season);
        event.preventDefault();
    }

    async fetchFortnite(platform, epicNickname, season) {

        const url = `http://localhost:3001/stats/${platform}/${epicNickname}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
            }
        });
        const json = await response.json();
        console.log(json.stats);
        console.log(season);
        console.log(this.state[season]  );
        let fortnite = await Object.values(json.stats[season]).map(stat =>{

            return(
                <ul>
                    <li>{stat.label}:</li>
                    <li>{stat.displayValue}</li>
                </ul>
            )
        });
        this.setState({fortnite: fortnite})

    }
}

export default App;