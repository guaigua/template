import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import { Alert, Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col  } from 'react-bootstrap';
import { contentfulClient } from "../utils/contenfulClient";
import Image from '../components/elements/Image';


class split_three extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        contentfulClient.getEntries({ content_type: 'featuresSplits' })
            .then((response) => {
                this.setState({
                    articles: response.items[0].fields
                })
            })
            .catch(console.error)
    }
    
    render() {
        const { subtitles, titles, description, featuredImage , url  } = this.state.articles;
        console.log( 'test', subtitles);
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={6}>
                            <h1>{subtitles}</h1>
                
                            <h2>{titles}</h2>

                            <h4>{description}</h4>
                        
                            <h5>{url}</h5>
                        </Col>
                        <Col xs={6}>
                            <Image
                                className="has-shadow"
                                src={ featuredImage && featuredImage.fields.file.url}
                                alt="Hero"
                                width={528}
                                height={396} />
                        </Col>
                    </Row>
                </Container>        
            </div>            
        );
    }
}

export default split_three;




