import 'bootstrap/scss/bootstrap.scss';
import { Container, Row, Col  } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import { contentfulClient } from "../utils/contenfulClient";
import Image from '../components/elements/Image';

class split_two extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        contentfulClient.getEntries({ content_type: 'featuresSplits' })
            .then((response) => {
                console.log(response)
                this.setState({
                    articles: response.items
                })
            })
            .catch(console.error)
    }
    static propTypes = {
        titles: PropTypes.string,
        description: PropTypes.string,

      };
    static async getInitialProps() {
        const data = await contentfulClient.getEntry('4Q4a5gykT1Sj7o5d92JqtN');
    
        return { ...data.fields };
      };

    render() {
        const { titles, description } = this.props;
        return (
            <div>
                <Container>
                <Row>
                    <Col xs={6}>
                        Test
                    </Col>
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

                <h2 className='title'>{titles}</h2>
                    <h2 className='title'>{description}</h2>
            </div>            
        );
    }
}

export default split_two;