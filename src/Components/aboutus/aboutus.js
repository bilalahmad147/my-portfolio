import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './aboutus.css'


function aboutus() {
    return (
        <div>
            <Container>
                <Row>
                    <h2>About US</h2>
                </Row>
                <Row>
                    <Col>

                        <Row>
                            <h3>Our Motto</h3>
                            <p>SAB tech is looking forward to work as well as helping others with their available resources. We offer free of cost trainings as well as internships to those who deserve.</p>
                        </Row>
                    </Col>
                    <Col>
                        <img src="https://avatars.githubusercontent.com/u/61399708?s=460&u=e6ae39dd149cdc436de8cbc9f8cb722dde510291&v=4"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default aboutus
