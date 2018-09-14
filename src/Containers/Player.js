import React, { Component } from 'react';
import 'whatwg-fetch';
import Form from '../Components/Form/Form';
import Stats from '../Components/Stats/Stats'

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
                <Form
                    submit={this.handleSubmit}
                    name={this.state.epicName}
                    namechange={this.handleNameChange}

                    platformvalue={this.state.platform}
                    platformchange={this.handlePlatformChange}

                    seasonvalue={this.state.season}
                    seasonchange={this.handleSeasonChange}

                />

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