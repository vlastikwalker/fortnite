import React, { Component } from 'react';
import 'whatwg-fetch';
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Stats from './Stats';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            epicName: '',
            platform: 'pc',
            season: 'p2',
            fortnite: null
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePlatformChange = this.handlePlatformChange.bind(this);
        this.handleSeasonChange = this.handleSeasonChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="Player">

                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup binding={this} className="form-left">

                        <Label>
                            <Input type="text" value={this.state.epicName} onChange={this.handleNameChange}/>
                            <Input type="select" value={this.state.platform} onChange={this.handlePlatformChange}>
                                <option value="pc">PC</option>
                                <option value="xbox">XBOX</option>
                                <option value="ps4">PS4</option>
                            </Input>
                            <Input type="select" value={this.state.season} onChange={this.handleSeasonChange}>
                                <option value="p2">SOLO</option>
                                <option value="p10">DUOS</option>
                                <option value="p9">SQUADS</option>
                            </Input>
                            <Button className="submit-button">Submit</Button>
                        </Label>
                    </FormGroup>
                </Form>

                <Stats fortnite={this.state.fortnite}/>
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

        this.setState({fortnite: json.stats[season]})

    }
}

export default Player;