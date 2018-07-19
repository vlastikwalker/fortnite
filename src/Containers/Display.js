import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Display.css';

const display = (props) => {
    return (
        <div className="fortnite-stats">
                <Row>
                    <Col xs="6">
                        <div className="stats left">
                            {props.fortniteDis}
                        </div>

                    </Col>
                    <Col xs="6">
                        <div className="stats right">
                            {props.fortniteDis}
                        </div>
                    </Col>
                </Row>
        </div>
    )
};

export default display;