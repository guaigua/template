import 'bootstrap/scss/bootstrap.scss';
import { Container, Row, Col  } from 'react-bootstrap';
import React from 'react';
import Image from '../components/elements/Image';


class split_one extends React.Component {

    render() {
      
        return (
            <div>
                <Container>
                <Row>
                    <Col xs={6}>xs=6</Col>
                    <Col xs={6}>
                        xs=6
                        <Image
                            className="has-shadow"
                            src={'/img/features-split-image-01.jpg'}
                            alt="Hero"
                            width={896}
                            height={504} />
                        
                    </Col>
                </Row>

                </Container>

   
            </div>            
        );
    }
}

export default split_one;