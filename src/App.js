import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import { Container, Row, Col } from 'reactstrap';
import Player from './Containers/Player';

class App extends Component {

    render() {
        return (
            <div className="App">

                <Container>
                    <h1 className="header-text">Fortnite API</h1>
                    <Row>
                            <Col xs="6">
                                <Player/>
                            </Col>
                            <Col xs="6">
                                <Player/>
                            </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default App;