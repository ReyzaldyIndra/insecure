import React, { Component } from 'react'
import { render } from '@testing-library/react'
import {Container, Row} from 'react-bootstrap'

class FaceEnrollment extends React.Component {


    render() {
        return(
            <Container>
                <Row>
                <div style={{textAlign:"center"}}>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>Rhino Report</p>
                <p>July 12, 2020</p>
                    <img alt="" src="https://insecure-res-doc.s3.amazonaws.com/res-arch/scatter-plot.png"></img>
            </div>
                </Row>
            </Container>
            
            
        )
    }

}

export default FaceEnrollment

