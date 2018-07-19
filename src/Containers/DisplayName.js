import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './DisplayName.css'
import Dis from '../Images/dis.jpg'
import Dis1 from '../Images/dis1.jpg'
import Sword from '../Images/sword.svg.png'

const displayName = (props) => {
    return(

                <Row>
                    <Col sm="4">
                        <div className="name-box left">
                                <h1>{props.name}</h1>
                                <img src={Dis} />
                        </div>
                    </Col>
                    <Col sm="4">
                        <div className="sword">
                            <img src={Sword} />
                        </div>
                    </Col>
                    <Col sm="4">
                        <div className="name-box right">
                            <img src={Dis} />
                            <h1>{props.name}</h1>
                        </div>
                    </Col>
                </Row>
    )
};

export default displayName;