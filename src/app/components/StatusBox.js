import React from "react";
import {Col, Row} from "react-bootstrap";

const StatusBox = (props) => {

    return (
        <div style={{float: "left", padding: 10, width: 180}} className='container p-1'>
            <div>
                {props.name}
            </div>
            <Row>
                <Col lg={8} md={8} sm={7} xs={7}>
                    Active
                </Col>
                <Col lg={4} md={4} sm={5} xs={5}>
                    {props.activeCases}
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={8} sm={7} xs={7}>
                    Confirmed
                </Col>
                <Col lg={4} md={4} sm={5} xs={5}>
                    {props.confirmedCases}
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={8}  sm={7} xs={7}>
                    Deceased
                </Col>
                <Col lg={4} md={4} sm={5} xs={5}>
                    {props.deceasesCases}
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={8}  sm={7} xs={7}>
                    Recovered
                </Col>
                <Col lg={4} md={4} sm={6} sm={5} xs={5}>
                    {props.recoveredCases}
                </Col>
            </Row>
        </div>

    )
};

export default StatusBox;

/**
 * Created
 * ------------
 * Date: 05/09/2020
 * Author: Arun Jose
 */
